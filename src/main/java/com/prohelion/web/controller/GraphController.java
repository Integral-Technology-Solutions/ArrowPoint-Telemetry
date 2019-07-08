package com.prohelion.web.controller;

import com.prohelion.dao.MeasurementDataRepository;
import com.prohelion.dao.SocData;
import com.prohelion.model.SocChartData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
@RequestMapping(value = "/")
public class GraphController {

    @Autowired
    MeasurementDataRepository measurementDataRepository;

    @RequestMapping(value = { "/soc.json" }, method = RequestMethod.GET)
    public @ResponseBody
    HashMap<String, SocResponseWrapper> getBMSCanData()
    {
        Collection<SocData> d =  measurementDataRepository.findSocOneDay(); // Get all of the data for Soc based on query
        List<String> tstamp = d.stream().map(SocData -> SocData.getTstamp()).collect(Collectors.toList());
        List<Float> soc = d.stream().map(SocData -> SocData.getSoc()).collect(Collectors.toList()); // Place data into lists
        List<SocChartData> chartData = new ArrayList<>();
        for(int i = 0; i < soc.size(); i++) {
            chartData.add(new SocChartData(tstamp.get(i), soc.get(i))); // Create chart data objects
        }
        HashMap<String, SocResponseWrapper> response = new HashMap<>();
        response.put("results", new SocResponseWrapper(new SocMetaData("2019-07-08 16:01:00.0", //TODO: Meta data is going to be URL params from angular
                "2019-07-08 14:58:00.0", 1),
                chartData));
        return response;
    }

    class SocResponseWrapper {
        private SocMetaData meta;
        private List<SocChartData> data;

        public SocResponseWrapper(SocMetaData meta, List<SocChartData> data) {
            this.meta = meta;
            this.data = data;
        }

        public SocMetaData getMeta() {
            return meta;
        }

        public void setMeta(SocMetaData meta) {
            this.meta = meta;
        }

        public List<SocChartData> getData() {
            return data;
        }

        public void setData(List<SocChartData> data) {
            this.data = data;
        }
    }

    class SocMetaData {
        private String startDate;
        private String endDate;
        private int timeBucketMins;

        public SocMetaData(String startDate, String endDate, int timeBucketGroupingValue) {
            this.startDate = startDate;
            this.endDate = endDate;
            this.timeBucketMins = timeBucketGroupingValue;
        }

        public String getStartDate() {
            return startDate;
        }

        public void setStartDate(String startDate) {
            this.startDate = startDate;
        }

        public String getEndDate() {
            return endDate;
        }

        public void setEndDate(String endDate) {
            this.endDate = endDate;
        }

        public int getTimeBucketMins() {
            return timeBucketMins;
        }

        public void setTimeBucketMins(int timeBucketGroupingValue) {
            this.timeBucketMins = timeBucketGroupingValue;
        }
    }
}

package com.prohelion.web.controller;

import com.prohelion.model.ChartData;
import com.prohelion.web.services.GraphService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
@RequestMapping(value = "/")
public class GraphController {

    @Autowired
    GraphService graphService;

    @RequestMapping(value = { "/graph-data.json" }, method = RequestMethod.GET)
    public @ResponseBody
    HashMap<String, ResponseWrapper> getGraphData(@RequestParam String bucketInterval, @RequestParam String timeInterval, @RequestParam String graphName)
    {
        return graphService.graphApi(bucketInterval, timeInterval, graphName);
    }

    public static class ResponseWrapper {
        private MetaData meta;
        private List<ChartData> data;

        public ResponseWrapper(MetaData meta, List<ChartData> data) {
            this.meta = meta;
            this.data = data;
        }

        public MetaData getMeta() {
            return meta;
        }

        public void setMeta(MetaData meta) {
            this.meta = meta;
        }

        public List<ChartData> getData() {
            return data;
        }

        public void setData(List<ChartData> data) {
            this.data = data;
        }
    }

    public static class MetaData {
        private String startDate;
        private String endDate;
        private String timeBucketMins;

        public MetaData(String startDate, String endDate, String timeBucketGroupingValue) {
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

        public String getTimeBucketMins() {
            return timeBucketMins;
        }

        public void setTimeBucketMins(String timeBucketGroupingValue) {
            this.timeBucketMins = timeBucketGroupingValue;
        }
    }
}

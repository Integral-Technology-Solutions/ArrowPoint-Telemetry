package com.prohelion.web.services;

import com.prohelion.dao.DataPoint;
import com.prohelion.dao.MeasurementDataRepository;
import com.prohelion.model.ChartData;
import com.prohelion.web.controller.GraphController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class GraphService {

    @Autowired
    MeasurementDataRepository measurementDataRepository;

    public HashMap<String, GraphController.ResponseWrapper> graphApi(String bucketInterval, String timeInterval, String graphName) {
        Collection<DataPoint> d = null;
        switch (graphName) {
            case "soc":
                d = measurementDataRepository.getSocData(bucketInterval, timeInterval); // Get all of the data for Soc based on query

                break;
            case "voltage":
                d = measurementDataRepository.getVoltageData(bucketInterval, timeInterval); // Get all of the data for Soc based on query

                break;
            case "current":
                measurementDataRepository.getCurrentData(bucketInterval, timeInterval); // Get all of the data for Soc based on query

                break;
        }
        assert d != null;
        List<String> tstamp = d.stream().map(DataPoint -> DataPoint.getTimeInterval()).collect(Collectors.toList());
        List<Float> soc = d.stream().map(DataPoint -> DataPoint.getFval()).collect(Collectors.toList()); // Place data into lists
        List<ChartData> chartData = new ArrayList<>();
        for(int i = 0; i < soc.size(); i++) {
            chartData.add(new ChartData(tstamp.get(i), soc.get(i))); // Create chart data objects
        }
        HashMap<String, GraphController.ResponseWrapper> response = new HashMap<>();
        response.put("results", new GraphController.ResponseWrapper(new GraphController.MetaData(tstamp.get(0),
                tstamp.get(tstamp.size() - 1), bucketInterval),
                chartData));
        return response;
    }

}

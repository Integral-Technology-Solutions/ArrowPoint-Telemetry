package com.prohelion.model;

import java.time.OffsetDateTime;

/**
 * This class is used to represent each point of soc chart data
 */
public class SocChartData  {

    private String tstamp;
    private float soc;

    public SocChartData() {
    }

    public SocChartData(String tstamp, float soc) {
        this.tstamp = tstamp;
        this.soc = soc;
    }

    public String getTimestamp() {
        return tstamp;
    }

    public void setTimestamp(String timestamp) {
        this.tstamp = timestamp;
    }

    public float getSoc() {
        return soc;
    }

    public void setSoc(float soc) {
        this.soc = soc;
    }
}

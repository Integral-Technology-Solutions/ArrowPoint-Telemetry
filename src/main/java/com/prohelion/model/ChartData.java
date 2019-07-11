package com.prohelion.model;


/**
 * This class is used to represent each point of fval chart data
 */
public class ChartData {

    private String tstamp;
    private float fval;

    public ChartData() {
    }

    public ChartData(String tstamp, float fval) {
        this.tstamp = tstamp;
        this.fval = fval;
    }

    public String getTimestamp() {
        return tstamp;
    }

    public void setTimestamp(String timestamp) {
        this.tstamp = timestamp;
    }

    public float getFval() {
        return fval;
    }

    public void setFval(float fval) {
        this.fval = fval;
    }
}

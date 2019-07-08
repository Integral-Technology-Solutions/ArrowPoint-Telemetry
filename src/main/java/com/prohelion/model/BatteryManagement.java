package com.prohelion.model;

import java.util.List;

public class BatteryManagement {
    private int canId;
    private int divisor;
    private double value;
    private List<MeasurementData> measurementData;

    public BatteryManagement() {
    }

    public BatteryManagement(int canId, int divisor, List<MeasurementData> measurementData) {
        this.canId = canId;
        this.divisor = divisor;
        this.measurementData = measurementData;
    }

    public int getCanId() {
        return canId;
    }

    public void setCanId(int canId) {
        this.canId = canId;
    }

    public int getDivisor() {
        return divisor;
    }

    public void setDivisor(int divisor) {
        this.divisor = divisor;
    }

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }

    public List<MeasurementData> getMeasurementData() {
        return measurementData;
    }

    public void setMeasurementData(List<MeasurementData> measurementData) {
        this.measurementData = measurementData;
    }
}

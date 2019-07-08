package com.prohelion.dao;

/**
 * This interface will pull out the time stamp and averaged Soc percentage from the
 * query within the specific query in MeasurementDataRepository
 */
public interface SocData {
    String getTstamp();
    float getSoc();
}

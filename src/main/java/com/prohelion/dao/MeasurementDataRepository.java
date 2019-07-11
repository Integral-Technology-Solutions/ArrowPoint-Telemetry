package com.prohelion.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.prohelion.model.MeasurementData;
import com.prohelion.model.PowerUseDto;

@Transactional(readOnly = true)
public interface MeasurementDataRepository extends JpaRepository<MeasurementData, Long> {

    Page<MeasurementData> findByDataPointCanId(Integer dataPointCanId, Pageable pageable);
   
    // Note this query can return duplicates when multiple records have exactly the same timestamp
    // This issue is dealt with in MeasurementDataServiceImpl.findLatestDataForCanId() at the moment as the sql query to deal with this
    // issue is likely to cause greater performance loss
    @Query(nativeQuery = true, value = "select md.* from msrmnt_data md inner join (select data_pnt_can_id as dpcid, max(tstamp) as maxt from msrmnt_data group by data_pnt_can_id) max_tstamps on md.data_pnt_can_id = max_tstamps.dpcid and md.tstamp = max_tstamps.maxt where md.data_pnt_can_id >> 4 = ?1 order by data_pnt_can_id DESC")    
    List<MeasurementData> findLatestDataForCanId(Integer canId);

    @Query(nativeQuery = true, value = "select volt.tstamp as tstamp, volt.fval as volts, amp.fval as amps, (volt.fval * amp.fval)/1000000 as power from sht_term_trend_data volt, sht_term_trend_data amp where volt.tstamp = amp.tstamp and (volt.data_pnt_can_id = 28576 and amp.data_pnt_can_id = 28580) order by volt.tstamp")
    List<PowerUseDto> findShortTermPowerUseData();
    
    @Query(nativeQuery = true, value = "select volt.tstamp as tstamp, volt.fval as volts, amp.fval as amps, (volt.fval * amp.fval)/1000000 as power from med_term_trend_data volt, med_term_trend_data amp where volt.tstamp = amp.tstamp and (volt.data_pnt_can_id = 28576 and amp.data_pnt_can_id = 28580) order by volt.tstamp")
    List<PowerUseDto> findMediumTermPowerUseData();

    @Query(nativeQuery = true, value = "select volt.tstamp as tstamp, volt.fval as volts, amp.fval as amps, (volt.fval * amp.fval)/1000000 as power from lng_term_trend_data volt, lng_term_trend_data amp where volt.tstamp = amp.tstamp and (volt.data_pnt_can_id = 28576 and amp.data_pnt_can_id = 28580) order by volt.tstamp")
    List<PowerUseDto> findLongTermPowerUseData();


    @Query(nativeQuery = true, value = "SELECT time_bucket(CAST(?1 AS INTERVAL), tstamp) AS timeInterval, avg(fval) AS fval FROM msrmnt_data WHERE tstamp > now() - CAST(?2 AS INTERVAL) AND data_pnt_can_id = 28484 GROUP BY timeInterval ORDER BY timeInterval")
    List<DataPoint> getSocData(@Param("bucket_interval") String timeBucket, @Param("time_interval") String interval);

    @Query(nativeQuery = true, value = "SELECT time_bucket(CAST(?1 AS INTERVAL), tstamp) AS timeInterval, avg(fval) AS fval FROM msrmnt_data WHERE tstamp > now() - CAST(?2 AS INTERVAL) AND data_pnt_can_id = 28576 GROUP BY timeInterval ORDER BY timeInterval")
    List<DataPoint> getVoltageData(@Param("bucket_interval") String timeBucket, @Param("time_interval") String interval);

    @Query(nativeQuery = true, value = "SELECT time_bucket(CAST(?1 AS INTERVAL), tstamp) AS timeInterval, avg(fval) AS fval FROM msrmnt_data WHERE tstamp > now() - CAST(?2 AS INTERVAL) AND data_pnt_can_id = 28580 GROUP BY timeInterval ORDER BY timeInterval")
    List<DataPoint> getCurrentData(@Param("bucket_interval") String timeBucket, @Param("time_interval") String interval);

}


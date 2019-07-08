package com.prohelion.web.controller;

import java.util.ArrayList;
import java.util.List;

import com.prohelion.model.BatteryManagement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.prohelion.model.MeasurementData;
import com.prohelion.service.MeasurementDataService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
@RequestMapping(value = "/")
@Transactional(readOnly = true)
public class BMSController extends AbstractController {
    
    private Integer cellDataBaseIdx = 0x602;
    
    @Autowired
    private MeasurementDataService measurementDataService;

    public BMSController() {
        
    }
    
    @RequestMapping(value = { "/bms.html" }, method = RequestMethod.GET)
    public String getBMSDashboard(Model model) {
        model.addAttribute("devices", getDevices());
        return "bms";
    }

    @RequestMapping(value = { "/test" }, method = RequestMethod.GET)
    public @ResponseBody String getBMSDashboard2(Model model) {
       // model.addAttribute("devices", getDevices());
        return "Testing, Testing, 1, 2, 3 ...";
    }

    @RequestMapping(value = { "/bms.json" }, method = RequestMethod.GET, params = { "canId" })
    public @ResponseBody List<MeasurementData> getBMSCanData(@RequestParam(required = true) Integer canId)
    {
    	return measurementDataService.findLatestDataForCanId(canId);

    }

    /**
     * This controller exposes all of the battery data required for the BMS Summary view
     * (Replaces logic currently existing in the front end)
     * @return
     */
    @RequestMapping(value = { "/bms-data.json" }, method = RequestMethod.GET)
    public @ResponseBody List<BatteryManagement> getAllBmsCanData(){
        List<BatteryManagement> allBatteryData =  new ArrayList<>();

        int[] canIds = {1780, 1781, 1782, 1783, 1784, 1785, 1786, 1787, 1788, 1537, 1540, 1543, 1546, 1549, 1538, 1539,
        1541, 1542, 1544, 1545, 1547, 1548, 1550, 1551};


        for (int canId : canIds) {
            int divisor = 1;
            if(canId == 1537 || canId == 1540 || canId == 1543 || canId == 1546 || canId == 1549){
                divisor = 10;
            }
            BatteryManagement bm = new BatteryManagement(canId, divisor,
                    measurementDataService.findLatestDataForCanId(canId));

            allBatteryData.add(bm);
        }

        return allBatteryData;
    }

    @RequestMapping(value = { "/cmu.json" }, method = RequestMethod.GET)
    public @ResponseBody List<MeasurementData> getCmuData(@RequestParam(required = true) Integer cmuIdx) {
        List<MeasurementData> cmuData = new ArrayList<MeasurementData>();
        int basis = cellDataBaseIdx + (3 * cmuIdx);
        
        for (int i = 0; i < 2; i++) {
            cmuData.addAll(measurementDataService.findLatestDataForCanId(basis + i));
        }
        
        return cmuData;
    }
}

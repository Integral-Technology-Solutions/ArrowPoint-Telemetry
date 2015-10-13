package au.com.teamarrow.scheduled.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import au.com.teamarrow.alerts.AlertManager;
import au.com.teamarrow.scheduled.Worker;


/**
 * An asynchronous worker
 */

@Component("alertsWorker")
public class AlertsWorker implements Worker {
	   
	
	@Autowired
    @Qualifier("AlertManager")
    AlertManager alertManager;
	
	@Async    
	public void work() {			
		alertManager.triggerAlertScripts();		
		return;
	}

}	
	
	

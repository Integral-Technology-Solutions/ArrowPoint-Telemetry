package com.prohelion.spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
@PropertySource({"classpath:application.properties"})
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private Environment env;
	
    @Override
    protected void configure(HttpSecurity http) throws Exception {
//        http
//                .cors().and()
//        	.csrf().disable()
//            .authorizeRequests()
//                .antMatchers("/css/**","/img/**","/js/**").permitAll()
//                .antMatchers(HttpMethod.POST, "/forward-data.json").permitAll()
//                .antMatchers(HttpMethod.POST, "/car-data.json").permitAll()
//                .antMatchers(HttpMethod.GET, "/measurement-data.json").permitAll()
//                .anyRequest().authenticated()
//                .and()
//            .formLogin()
//                .loginPage("/login")
//                .permitAll()
//                .defaultSuccessUrl("/index.html", true)
//                .and()
//            .logout()
//            	.deleteCookies("JSESSIONID")
//                .permitAll()
//             .and()
//                .rememberMe().key("!uniqueAndSecretKeyThatOnlyWeWouldKnow!");
    }

//    @Bean
//    @Override
//    public UserDetailsService userDetailsService() {
//        @SuppressWarnings("deprecation")
//		UserDetails user =
//             User.withDefaultPasswordEncoder()
//                .username(env.getProperty("telemetry.username"))
//                .password(env.getProperty("telemetry.password"))
//                .roles("USER")
//                .build();
//
//        return new InMemoryUserDetailsManager(user);
//    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**");
            }
        };
    }

}
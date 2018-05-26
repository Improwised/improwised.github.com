# Improwised Technologies Pvt. Ltd

To run this project locally

* Prequirement   
  [gohugo](https://gohugo.io/)  
  [http-server](https://github.com/indexzero/http-server)    

* To run this project `http://localhost:1313/`

    ```
    hugo server --noHTTPCache -t improwised_theme_stark --disableFastRender
    ```

* To generate build file in `/public` folder 
```
hugo
```

* To run build go to `/public` folder & run this following command, project will run at `http://localhost:8080/`
```
http-server
```

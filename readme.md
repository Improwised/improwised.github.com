# Improwised Technologies Pvt. Ltd

To run this project locally

* Prequirement   
  [gohugo](https://gohugo.io/)  
  [http-server](https://github.com/indexzero/http-server)    

## Development

* Set `env` to `development` in `config.toml`

    ```
    [params]
      env = "development"
    ```

## to generate bundel run following command

    ```
    npm run build
    ```

this will generate `dist` folder in `/themes/improwised_theme_stark/static/` & to test this build change `env` `development` to `production` in `config.toml`

* To run project locally at `http://localhost:1313/`

    ```
    hugo server --noHTTPCache -t improwised_theme_stark --disableFastRender
    ```

## To generate production build

* To generate build file in `/public` folder 
    ```
    hugo
    ```

* To run build go to `/public` folder & run this following command, project will run at `http://localhost:8080/`
    ```
    http-server
    ```

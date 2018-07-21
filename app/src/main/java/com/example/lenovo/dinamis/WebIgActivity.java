package com.example.lenovo.dinamis;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebView;

public class WebIgActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_web_ig);
        String url = "https://www.instagram.com/pentisetiawati23/";
        WebView view =(WebView) this.findViewById(R.id.webig);
        view.getSettings().setJavaScriptEnabled(true);
        view.loadUrl(url);
    }
}

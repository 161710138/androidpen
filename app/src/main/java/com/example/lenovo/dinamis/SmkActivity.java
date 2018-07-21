package com.example.lenovo.dinamis;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebView;

public class SmkActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_smk);
        String url = "https://smkassalaambandung.sch.id/";
        WebView view =(WebView) this.findViewById(R.id.websmk);
        view.getSettings().setJavaScriptEnabled(true);
        view.loadUrl(url);
    }
}

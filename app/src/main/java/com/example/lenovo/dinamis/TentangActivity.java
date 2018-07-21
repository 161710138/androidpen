package com.example.lenovo.dinamis;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

public class TentangActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tentang);
    }

    public void keig (View view){
        Intent igintent = new Intent(TentangActivity.this,WebIgActivity.class);
        startActivity(igintent);
    }
    public void kesmk (View view){
        Intent smkintent = new Intent(TentangActivity.this,SmkActivity.class);
        startActivity(smkintent);
    }
}

package com.example.lenovo.dinamis;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.app.Activity;
import android.content.res.Resources;
import android.graphics.drawable.TransitionDrawable;
import android.os.CountDownTimer;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.ImageView.ScaleType;

public class CobaActivity extends Activity {

    ImageView imgBackground;
    TransitionDrawable trans1;
    TransitionDrawable trans2;
    TransitionDrawable trans3;
    TransitionDrawable trans4;
    Resources res;
    private int text;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_coba);


        Button next1 = (Button) findViewById(R.id.button1);
        next1.setOnClickListener(new View.OnClickListener() {

            public void onClick(View bebek) {
                Intent myIntent = new Intent(bebek.getContext(), MianActivity.class);
                startActivityForResult(myIntent, 0);
            }

        });
        Button next2 = (Button) findViewById(R.id.button2);
        next2.setOnClickListener(new View.OnClickListener() {

            public void onClick(View bebek) {
                Intent myIntent = new Intent(bebek.getContext(), MainActivity.class);
                startActivityForResult(myIntent, 0);
            }

        });
        Button next3 = (Button) findViewById(R.id.button3);
        next3.setOnClickListener(new View.OnClickListener() {

            public void onClick(View bebek) {
                Intent myIntent = new Intent(bebek.getContext(), TentangActivity.class);
                startActivityForResult(myIntent, 0);
            }

        });




        res = this.getResources();
        imgBackground = (ImageView) findViewById(R.id.imgBackground);
        trans1 = (TransitionDrawable) res.getDrawable(R.drawable.transition1);
        trans2 = (TransitionDrawable) res.getDrawable(R.drawable.transition2);
        trans3 = (TransitionDrawable) res.getDrawable(R.drawable.transition3);
        trans4 = (TransitionDrawable) res.getDrawable(R.drawable.transition4);
        load();
        }
    private void load() {
        new CountDownTimer(
                4000, 4000) {
            public void onTick(long millisUntilFinished) {

            }

            public void onFinish() {
                repeat();
            }

        }.start();

    }

    private void repeat() {
        new CountDownTimer(4000, 4000) {
            public void onTick(long millisUntilFinished) {
                trans1.startTransition(4000);
                imgBackground.setImageDrawable(trans1);
            }

            public void onFinish() {
                imgBackground.setImageDrawable(trans2);
                trans2.startTransition(4000);

                new CountDownTimer(4000, 4000) {
                    public void onTick(long millisUntilFinished) {

                    }

                    public void onFinish() {
                        imgBackground.setImageDrawable(trans3);
                        trans3.startTransition(4000);

                        new CountDownTimer(4000, 4000) {
                            public void onTick(long millisUntilFinished) {

                            }

                            public void onFinish() {
                                imgBackground.setImageDrawable(trans4);
                                trans4.startTransition(4000);

                                new CountDownTimer(4000, 4000) {
                                    public void onTick(long millisUntilFinished) {

                                    }

                                    public void onFinish() {
                                        repeat();
                                    }
                                }.start();
                            }
                        }.start();
                    }
                }.start();
            }
        }.start();
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();
        if (id == R.id.action_settings) {
            return true;
        }
        return super.onOptionsItemSelected(item);
    }
    @Override
    public void onBackPressed() {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setMessage("Anda Yakin Akan Keluar ?")
                .setCancelable(false)
                .setPositiveButton("Ya", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        CobaActivity.this.finish();
                    }
                })
                .setNegativeButton("Tidak", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface  dialog, int i) {
                        dialog.cancel();
                    }
                }).show();

    }
}


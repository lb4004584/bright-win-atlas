package com.hdbxgrithghtwinatluas;

import android.content.Context;
import android.content.SharedPreferences;
// import android.util.Log;

public class ShdbxgrithghtwinatluasharedPreferencesHelper {
    private static final String PREF_NAMEIhdbxgrithghtwinatluas = "hdbxgrithghtwinatluasStorage";
    private static Context applichdbxgrithghtwinatluasationContext = null;

    public static void setApplicationContext(Context context) {
        applichdbxgrithghtwinatluasationContext = context != null ? context.getApplicationContext() : null;
    }

    private static Context getContext() {
        try {
            if (applichdbxgrithghtwinatluasationContext != null) {
                return applichdbxgrithghtwinatluasationContext;
            }
            return null;
        } catch (Exception e) {
            return null;
        }
    }

    public static void saveString(String key, String value) {
        Context contextIhdbxgrithghtwinatluas = getContext();
        if (contextIhdbxgrithghtwinatluas != null) {
            try {
                SharedPreferences prefsIhdbxgrithghtwinatluas = contextIhdbxgrithghtwinatluas.getSharedPreferences(PREF_NAMEIhdbxgrithghtwinatluas, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIhdbxgrithghtwinatluas = prefsIhdbxgrithghtwinatluas.edit();
                editorIhdbxgrithghtwinatluas.putString(key, value);
                editorIhdbxgrithghtwinatluas.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static String loadString(String key, String defaultValue) {
        Context contextIhdbxgrithghtwinatluas = getContext();
        if (contextIhdbxgrithghtwinatluas != null) {
            try {
                SharedPreferences prefsIhdbxgrithghtwinatluas = contextIhdbxgrithghtwinatluas.getSharedPreferences(PREF_NAMEIhdbxgrithghtwinatluas, Context.MODE_PRIVATE);
                String valueIhdbxgrithghtwinatluas = prefsIhdbxgrithghtwinatluas.getString(key, defaultValue);
                return valueIhdbxgrithghtwinatluas;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void saveInt(String key, int value) {
        Context contextIhdbxgrithghtwinatluas = getContext();
        if (contextIhdbxgrithghtwinatluas != null) {
            try {
                SharedPreferences prefsIhdbxgrithghtwinatluas = contextIhdbxgrithghtwinatluas.getSharedPreferences(PREF_NAMEIhdbxgrithghtwinatluas, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIhdbxgrithghtwinatluas = prefsIhdbxgrithghtwinatluas.edit();
                editorIhdbxgrithghtwinatluas.putInt(key, value);
                editorIhdbxgrithghtwinatluas.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static int loadInt(String key, int defaultValue) {
        Context contextIhdbxgrithghtwinatluas = getContext();
        if (contextIhdbxgrithghtwinatluas != null) {
            try {
                SharedPreferences prefsIhdbxgrithghtwinatluas = contextIhdbxgrithghtwinatluas.getSharedPreferences(PREF_NAMEIhdbxgrithghtwinatluas, Context.MODE_PRIVATE);
                int valueIhdbxgrithghtwinatluas = prefsIhdbxgrithghtwinatluas.getInt(key, defaultValue);
                return valueIhdbxgrithghtwinatluas;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void saveBoolean(String key, boolean value) {
        Context contextIhdbxgrithghtwinatluas = getContext();
        if (contextIhdbxgrithghtwinatluas != null) {
            try {
                SharedPreferences prefsIhdbxgrithghtwinatluas = contextIhdbxgrithghtwinatluas.getSharedPreferences(PREF_NAMEIhdbxgrithghtwinatluas, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIhdbxgrithghtwinatluas = prefsIhdbxgrithghtwinatluas.edit();
                editorIhdbxgrithghtwinatluas.putBoolean(key, value);
                editorIhdbxgrithghtwinatluas.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static boolean loadBoolean(String key, boolean defaultValue) {
        Context contextIhdbxgrithghtwinatluas = getContext();
        if (contextIhdbxgrithghtwinatluas != null) {
            try {
                SharedPreferences prefsIhdbxgrithghtwinatluas = contextIhdbxgrithghtwinatluas.getSharedPreferences(PREF_NAMEIhdbxgrithghtwinatluas, Context.MODE_PRIVATE);
                boolean valueIhdbxgrithghtwinatluas = prefsIhdbxgrithghtwinatluas.getBoolean(key, defaultValue);
                return valueIhdbxgrithghtwinatluas;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void removeKey(String key) {
        Context contextIhdbxgrithghtwinatluas = getContext();
        if (contextIhdbxgrithghtwinatluas != null) {
            try {
                SharedPreferences prefsIhdbxgrithghtwinatluas = contextIhdbxgrithghtwinatluas.getSharedPreferences(PREF_NAMEIhdbxgrithghtwinatluas, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIhdbxgrithghtwinatluas = prefsIhdbxgrithghtwinatluas.edit();
                editorIhdbxgrithghtwinatluas.remove(key);
                editorIhdbxgrithghtwinatluas.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static void clearAll() {
        Context contextIhdbxgrithghtwinatluas = getContext();
        if (contextIhdbxgrithghtwinatluas != null) {
            try {
                SharedPreferences prefsIhdbxgrithghtwinatluas = contextIhdbxgrithghtwinatluas.getSharedPreferences(PREF_NAMEIhdbxgrithghtwinatluas, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIhdbxgrithghtwinatluas = prefsIhdbxgrithghtwinatluas.edit();
                editorIhdbxgrithghtwinatluas.clear();
                editorIhdbxgrithghtwinatluas.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }
}

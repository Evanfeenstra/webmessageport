
### addJavascriptInterface

https://developer.android.com/reference/kotlin/android/webkit/JavascriptInterface

```java
// The class
class JSBridge(){
    @JavascriptInterface // needed for > lollipop
    fun postMessage(message:String){
        //Received message from webview in native, process data here
    }
}

// add these to your webview
mWebViewComponent.settings.javaScriptEnabled = true
mWebViewComponent.addJavascriptInterface(JSBridge(),"JSBridge")
```
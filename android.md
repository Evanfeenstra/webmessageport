
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
WebViewComponent.settings.javaScriptEnabled = true
WebViewComponent.addJavascriptInterface(JSBridge(),"JSBridge")

// to confirm
WebViewComponent.evaluateJavascript(
    "javascript: "+"updateFromNative(\"confirm\")",null)
}
```

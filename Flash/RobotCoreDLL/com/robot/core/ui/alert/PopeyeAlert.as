package com.robot.core.ui.alert
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.text.TextField;
   import flash.text.TextFormatAlign;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class PopeyeAlert
   {
      
      private static var _str:String;
      
      private static var _appFun:Function;
      
      private static var _cancelFun:Function;
       
      
      public function PopeyeAlert()
      {
         super();
      }
      
      public static function show(param1:String, param2:Function, param3:Function) : void
      {
         _str = param1;
         _appFun = param2;
         _cancelFun = param3;
         ResourceManager.getResource(ClientConfig.getResPath("alertPanel/popeye_alert.swf"),onGetRes,"popeye_alert_UI");
      }
      
      private static function onGetRes(param1:DisplayObject) : void
      {
         var txt:TextField;
         var mc:MovieClip = null;
         var apply:Function = null;
         var cancel:Function = null;
         var obj:DisplayObject = param1;
         apply = function(param1:MouseEvent):void
         {
            mc["applyBtn"].removeEventListener(MouseEvent.CLICK,apply);
            mc["cancelBtn"].removeEventListener(MouseEvent.CLICK,cancel);
            DisplayUtil.removeForParent(mc);
            LevelManager.openMouseEvent();
            if(_appFun != null)
            {
               _appFun();
            }
            _cancelFun = null;
            _appFun = null;
            _str = null;
            mc = null;
         };
         cancel = function(param1:MouseEvent):void
         {
            mc["applyBtn"].removeEventListener(MouseEvent.CLICK,apply);
            mc["cancelBtn"].removeEventListener(MouseEvent.CLICK,cancel);
            DisplayUtil.removeForParent(mc);
            LevelManager.openMouseEvent();
            if(_cancelFun != null)
            {
               _cancelFun();
            }
            _cancelFun = null;
            _appFun = null;
            _str = null;
            mc = null;
         };
         mc = obj as MovieClip;
         MainManager.getStage().addChild(mc);
         DisplayUtil.align(mc,null,AlignType.MIDDLE_CENTER);
         txt = mc["txt"];
         txt.autoSize = TextFormatAlign.CENTER;
         txt.htmlText = _str;
         txt.selectable = false;
         mc["applyBtn"].addEventListener(MouseEvent.CLICK,apply);
         mc["cancelBtn"].addEventListener(MouseEvent.CLICK,cancel);
      }
   }
}

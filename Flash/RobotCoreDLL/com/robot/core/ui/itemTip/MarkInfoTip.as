package com.robot.core.ui.itemTip
{
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.ui.BlackBgTip;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class MarkInfoTip
   {
       
      
      public function MarkInfoTip()
      {
         super();
      }
      
      public static function add(param1:DisplayObject, param2:uint) : void
      {
         var _loc3_:* = "名称：<font color=\'#ffff00\'>" + CountermarkXMLInfo.getDes(param2) + "</font>" + "\r" + "效果：<font color=\'#ffff00\'>" + CountermarkXMLInfo.getEffectDes(param2) + "</font>" + "\r" + "类型：<font color=\'#ffff00\'>" + CountermarkXMLInfo.getTypeName(param2) + "</font>" + "\r" + "限定：<font color=\'#ffff00\'>" + CountermarkXMLInfo.getRestrictDes(param2) + "</font>";
         if(Boolean(param1) && Boolean(param2))
         {
            param1.addEventListener(MouseEvent.MOUSE_OVER,onMosOver);
            param1.addEventListener(MouseEvent.MOUSE_OUT,onMosOut);
            (param1 as MovieClip).info = _loc3_;
         }
      }
      
      public static function clear(param1:DisplayObject = null) : void
      {
         if(param1)
         {
            param1.removeEventListener(MouseEvent.MOUSE_OVER,onMosOver);
            param1.removeEventListener(MouseEvent.MOUSE_OUT,onMosOut);
         }
         BlackBgTip.hide();
      }
      
      private static function onMosOver(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         if(_loc2_.info)
         {
            BlackBgTip.show(_loc2_.info,null,null,150);
         }
      }
      
      private static function onMosOut(param1:MouseEvent) : void
      {
         BlackBgTip.hide();
      }
   }
}

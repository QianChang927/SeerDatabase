package com.robot.core.ui.effectTips
{
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.text.TextField;
   import org.taomee.manager.ToolTipManager;
   
   public class EffectInfoTips
   {
      
      private static var _container:DisplayObjectContainer;
       
      
      public function EffectInfoTips()
      {
         super();
      }
      
      public static function setup(param1:DisplayObjectContainer, param2:String, param3:int, param4:String) : void
      {
         _container = param1;
         _container.visible = true;
         _container["desc"] = param2;
         _container["intro"] = param4;
         _container["starLevel"] = param3;
         (_container["effectTxt"] as TextField).text = param2;
         if(param3 > 0)
         {
            (_container["star"] as MovieClip).visible = true;
            (_container["star"] as MovieClip).gotoAndStop(param3);
         }
         else
         {
            (_container["star"] as MovieClip).visible = false;
         }
         ToolTipManager.remove(_container);
         if(param4 != "")
         {
            ToolTipManager.add(_container,param4);
         }
         else
         {
            ToolTipManager.add(_container,"如何获得特性");
         }
      }
      
      public static function destroy() : void
      {
         if(_container)
         {
            _container = null;
         }
      }
   }
}

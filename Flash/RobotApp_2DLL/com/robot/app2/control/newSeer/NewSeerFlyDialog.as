package com.robot.app2.control.newSeer
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NewSeerFlyDialog
   {
      
      private static var _dialogs:Array = new Array();
      
      private static var _lastDir:String;
      
      private static var _last:Object;
       
      
      public function NewSeerFlyDialog()
      {
         super();
      }
      
      public static function addDialog(param1:String, param2:String) : void
      {
         _dialogs.push({
            "label":param1,
            "dialog":param2
         });
      }
      
      public static function start(param1:Function = null) : void
      {
         var func:Function = param1;
         ResourceManager.getResource(ClientConfig.getAppRes("newSeer/fly_dialog2"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            LevelManager.closeMouseEvent();
            LevelManager.showOrRemoveMapLevelandToolslevel(false,true);
            flipDialog(mc);
            mc.buttonMode = true;
            mc.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
            {
               if(_dialogs.length == 0)
               {
                  _dialogs = [];
                  LevelManager.openMouseEvent();
                  LevelManager.showOrRemoveMapLevelandToolslevel(true);
                  mc.removeEventListener(MouseEvent.CLICK,arguments.callee);
                  DisplayUtil.removeForParent(mc);
                  if(null != func)
                  {
                     func.call();
                  }
               }
               else
               {
                  flipDialog(mc);
               }
            });
            LevelManager.appLevel.addChild(mc);
         });
      }
      
      private static function flipDialog(param1:MovieClip) : void
      {
         var label:String = null;
         var dialog:String = null;
         var mc:MovieClip = param1;
         label = String(_dialogs[0].label);
         dialog = String(_dialogs[0].dialog);
         mc.mouseChildren = mc.mouseEnabled = false;
         if(Boolean(_last) && label == _last.label)
         {
            mc.gotoAndStop(lastDir + "_flip");
            mc["dialog"]["npc"].gotoAndStop(_last.label);
            mc["dialog"]["txt"].text = _last.dialog;
            AnimateManager.playMcAnimate(mc["dialog"]["bg"],0,"",function():void
            {
               mc["dialog"]["npc"].gotoAndStop(label);
               mc["dialog"]["txt"].text = dialog;
               _last = _dialogs.shift();
               _lastDir = lastDir;
               mc.mouseChildren = mc.mouseEnabled = true;
            });
         }
         else
         {
            mc.gotoAndStop(diffDir + "_fly");
            mc["dialog"]["npc"].gotoAndStop(label);
            mc["dialog"]["dialog"]["txt"].text = dialog;
            AnimateManager.playMcAnimate(mc["dialog"],0,"",function():void
            {
               _last = _dialogs.shift();
               _lastDir = lastDir;
               mc["dialog"]["npc"].gotoAndStop(label);
               mc["dialog"]["dialog"]["txt"].text = dialog;
               mc.mouseChildren = mc.mouseEnabled = true;
            });
         }
      }
      
      private static function get lastDir() : String
      {
         if(_lastDir == null)
         {
            return "left";
         }
         return _lastDir;
      }
      
      private static function get diffDir() : String
      {
         if(_lastDir == "left")
         {
            return "right";
         }
         return "left";
      }
   }
}

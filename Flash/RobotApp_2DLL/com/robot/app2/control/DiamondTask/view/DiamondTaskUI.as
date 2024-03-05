package com.robot.app2.control.DiamondTask.view
{
   import com.robot.app2.control.DiamondTask.data.IDiamondTask;
   import com.robot.core.config.ClientConfig;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.text.TextField;
   import org.taomee.manager.ResourceManager;
   
   public class DiamondTaskUI extends Sprite
   {
      
      public static const HIDE:String = "hide";
      
      public static const AWARD:String = "award";
      
      public static const UPDATE:String = "update";
       
      
      protected var _diamondTask:IDiamondTask;
      
      protected var _ui:MovieClip;
      
      public function DiamondTaskUI(param1:IDiamondTask)
      {
         super();
         this._diamondTask = param1;
         this.getUI();
      }
      
      public function getUI() : void
      {
         if(this._diamondTask != null)
         {
            ResourceManager.getResource(ClientConfig.getAppResource("update/diamondTask/DiamondTaskUI"),function(param1:MovieClip):void
            {
               _ui = param1;
               _ui.btnContainer.gotoAndStop(1);
               addChild(_ui);
               _ui.addEventListener(MouseEvent.CLICK,onUIClick);
               updateUI();
            });
         }
      }
      
      public function updateUI() : void
      {
         this._diamondTask.updateTaskInfo(function():void
         {
            if(_ui != null)
            {
               _ui.txt.text = _diamondTask.taskCompleteDetail;
               _ui.btnContainer.gotoAndStop(_diamondTask.hasAward ? 3 : (_diamondTask.hasComplete ? 2 : 1));
               _ui.mc_1.gotoAndStop(_diamondTask.id);
               _ui.mc_2.gotoAndStop(_diamondTask.id);
               _ui.mc_3.gotoAndStop(_diamondTask.taskType);
            }
            dispatchEvent(new Event(DiamondTaskUI.UPDATE,false,false));
         });
      }
      
      public function loadUI() : void
      {
         var _loc2_:String = null;
         var _loc3_:Array = null;
         if(this._ui == null)
         {
            return;
         }
         var _loc1_:int = 1;
         while(_loc1_ <= this._diamondTask.awardDetail.length)
         {
            if(this._ui["item_" + _loc1_] != null)
            {
               _loc2_ = String(this._diamondTask[_loc1_ - 1]);
               _loc3_ = _loc2_.split("x");
               this._ui["item_" + _loc1_]["icon"] = new GoodIcon(int(_loc3_[0]));
               if(_loc3_.length == 2)
               {
                  TextField(this._ui["item_" + _loc1_]["txt"]).text = _loc3_[1];
               }
            }
            _loc1_++;
         }
      }
      
      protected function onUIClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "btn":
               this._diamondTask.taskGo();
               this.hide();
               break;
            case "award":
               this._diamondTask.award(function():void
               {
                  updateUI();
                  dispatchEvent(new Event(DiamondTaskUI.AWARD,false,false));
               });
         }
      }
      
      public function hide() : void
      {
         if(this._ui != null)
         {
            this._ui.removeEventListener(MouseEvent.CLICK,this.onUIClick);
            this._ui = null;
         }
         this._diamondTask = null;
         dispatchEvent(new Event(DiamondTaskUI.HIDE,false,false));
      }
   }
}

package com.robot.app2.control.DiamondTask2022.view
{
   import com.robot.app2.control.DiamondTask2022.DiamondTask2022Event;
   import com.robot.app2.control.DiamondTask2022.data.DiamondTaskRoutineData;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class DiamondTaskLineUI extends Sprite
   {
       
      
      protected var _data:DiamondTaskRoutineData;
      
      protected var _ui:MovieClip;
      
      protected var initShow:Function = null;
      
      public function DiamondTaskLineUI(param1:DiamondTaskRoutineData)
      {
         var data:DiamondTaskRoutineData = param1;
         super();
         this._data = data;
         ResourceManager.getResource(ClientConfig.getAppResource("update/diamondTask2022/DiamondTaskLineUI"),function(param1:MovieClip):void
         {
            _ui = param1;
            addChild(_ui);
            initUI();
            updateUI(data);
         });
      }
      
      protected function initUI() : void
      {
         if(this.initShow != null)
         {
            this.initShow();
            this.initShow = null;
         }
      }
      
      public function updateUI(param1:DiamondTaskRoutineData) : void
      {
         this._data = param1;
         this._ui.titleTxt.text = this._data.getTitle();
         var _loc2_:Array = this._data.getRewardInfo();
         var _loc3_:int = int(_loc2_[0]);
         var _loc4_:int = int(_loc2_[1]);
         var _loc5_:int = int(_loc2_[2]);
         var _loc6_:String = this.getRewardName(_loc4_);
         this._ui.rewardTxt.text = _loc6_ + "*" + _loc5_;
         this._ui.taskBtnMc.gotoAndStop(this._data.getCurState() + 1);
         this._ui.descTxt.htmlText = this._data.getDesc() + this.getProgressTxt();
      }
      
      protected function onUIClick(param1:*) : void
      {
         var _loc2_:String = String(param1.target.name);
         switch(_loc2_)
         {
            case "completeBtn":
               this.dispatchEvent(new DiamondTask2022Event(DiamondTask2022Event.CompleteRoutineTask,this._data.getTaskType(),this._data.getTaskId()));
               break;
            case "gotoBtn":
               this.dispatchEvent(new DiamondTask2022Event(DiamondTask2022Event.CloseDiamondTask,0,0,[this._data.getJump()]));
         }
      }
      
      public function show() : void
      {
         if(this._ui == null)
         {
            this.initShow = this.show;
            return;
         }
         this._ui.visible = true;
         this._ui.taskBtnMc.addEventListener(MouseEvent.CLICK,this.onUIClick);
      }
      
      public function hide() : void
      {
         this._ui.visible = false;
         this._ui.taskBtnMc.removeEventListener(MouseEvent.CLICK,this.onUIClick);
      }
      
      public function destroy() : void
      {
         this._ui = null;
      }
      
      private function getProgressTxt() : String
      {
         if(this._data.getCurProgress() < this._data.getSumProgress())
         {
            return " （" + "<font color=\'#FF0000\'>" + this._data.getCurProgress() + "</font>" + "/" + this._data.getSumProgress() + "）";
         }
         return " （" + "<font color=\'#00FF00\'>" + this._data.getSumProgress() + "</font>" + "/" + this._data.getSumProgress() + "）";
      }
      
      private function getRewardName(param1:int) : String
      {
         if(param1 == 204001 || param1 == 20210)
         {
            return "活跃度";
         }
         return ItemXMLInfo.getItemInfo(param1).Name;
      }
   }
}

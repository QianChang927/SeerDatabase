package com.robot.app2.control.DiamondTask2022.view
{
   import com.robot.app2.control.DiamondTask.view.GoodIcon;
   import com.robot.app2.control.DiamondTask2022.DiamondTask2022Event;
   import com.robot.app2.control.DiamondTask2022.data.DiamondTaskLivenessGiftData;
   import com.robot.app2.control.DiamondTask2022.data.DiamondTaskRetrieveData;
   import com.robot.core.config.ClientConfig;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class DiamondRetrieveLineUI extends Sprite
   {
       
      
      protected const RewardCnt:int = 4;
      
      protected var _giftIdx:int = 0;
      
      protected var _giftData:DiamondTaskLivenessGiftData;
      
      protected var _retrieveData:DiamondTaskRetrieveData;
      
      protected var _ui:MovieClip;
      
      protected var initShow:Function = null;
      
      protected const IconOffset:Array = [2,2];
      
      public function DiamondRetrieveLineUI(param1:int, param2:DiamondTaskLivenessGiftData, param3:DiamondTaskRetrieveData)
      {
         var giftIdx:int = param1;
         var data:DiamondTaskLivenessGiftData = param2;
         var rdata:DiamondTaskRetrieveData = param3;
         super();
         this._giftIdx = giftIdx;
         this._giftData = data;
         this._retrieveData = rdata;
         ResourceManager.getResource(ClientConfig.getAppResource("update/diamondTask2022/RetrieveLineUI"),function(param1:MovieClip):void
         {
            _ui = param1;
            addChild(_ui);
            initUI();
            updateUI(_retrieveData);
         });
      }
      
      protected function initUI() : void
      {
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         var _loc6_:int = 0;
         this._ui.costTxt.mouseEnabled = false;
         var _loc1_:Array = this._giftData.rewardArr;
         var _loc2_:int = this._giftData.diamond;
         var _loc3_:int = 1;
         while(_loc3_ <= this.RewardCnt)
         {
            if(_loc3_ <= _loc1_.length)
            {
               _loc4_ = int(_loc1_[_loc3_ - 1].split("_")[0]);
               _loc5_ = int(_loc1_[_loc3_ - 1].split("_")[1]);
               _loc6_ = int(_loc1_[_loc3_ - 1].split("_")[2]);
               DisplayUtil.removeAllChild(this._ui["icon_" + _loc3_]);
               this._ui["icon_" + _loc3_].addChild(new GoodIcon(_loc5_,0.8,this.IconOffset));
               this._ui["cnt_" + _loc3_].text = this.translateNum(this.calPartCnt(_loc6_,this._retrieveData.getRatio()));
            }
            else if(_loc2_ > 0)
            {
               DisplayUtil.removeAllChild(this._ui["icon_" + _loc3_]);
               this._ui["icon_" + _loc3_].addChild(new GoodIcon(5,1,this.IconOffset));
               this._ui["cnt_" + _loc3_].text = this.translateNum(this.calPartCnt(_loc2_,this._retrieveData.getRatio()));
               _loc2_ = 0;
            }
            else
            {
               this._ui["icon_" + _loc3_].visible = false;
               this._ui["iconBg_" + _loc3_].visible = false;
               this._ui["cnt_" + _loc3_].visible = false;
            }
            _loc3_++;
         }
         if(this.initShow != null)
         {
            this.initShow();
            this.initShow = null;
         }
      }
      
      public function updateUI(param1:DiamondTaskRetrieveData) : void
      {
         this._retrieveData = param1;
         this._ui.costTxt.text = this.translateNum(this._retrieveData.getCost());
         this._ui.descTxt.text = this._giftData.giftLimit + "点活跃度宝箱";
      }
      
      protected function onUIClick(param1:*) : void
      {
         var _loc2_:String = String(param1.target.name);
         switch(_loc2_)
         {
            case "retrieveBtn":
               this.dispatchEvent(new DiamondTask2022Event(DiamondTask2022Event.GetRetrieveGift,3,this._giftIdx,[this._retrieveData.getCost(),this.calPartCnt(this._giftData.diamond,this._retrieveData.getRatio())]));
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
         this._ui.retrieveBtn.addEventListener(MouseEvent.CLICK,this.onUIClick);
      }
      
      public function hide() : void
      {
         this._ui.visible = false;
         this._ui.retrieveBtn.removeEventListener(MouseEvent.CLICK,this.onUIClick);
      }
      
      public function destroy() : void
      {
         this._ui = null;
      }
      
      protected function calPartCnt(param1:int, param2:Number = 0.5) : int
      {
         return int(param1 * param2 + 0.99);
      }
      
      protected function translateNum(param1:int, param2:String = "W") : String
      {
         if(param1 >= 10000)
         {
            return param1 / 10000 + param2;
         }
         return param1.toString();
      }
   }
}

package com.robot.app.mapProcess
{
   import com.robot.app.buyItem.FitmentAction;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.dayGift.DayGiftController;
   import com.robot.core.info.task.CateInfo;
   import com.robot.core.info.task.DayTalkInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.ArrayUtils;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.debug.DebugTrace;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_334 extends BaseMapProcess
   {
      
      private static var _count:uint = 0;
       
      
      private var resultArr:Array;
      
      private var controlArr:Array;
      
      private var lightcontrolArr:Array;
      
      private var _isTurn:Boolean;
      
      private var conveyorMC:MovieClip;
      
      public function MapProcess_334()
      {
         this.resultArr = [0,3,1,2];
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseEnabled = false;
         topLevel.mouseChildren = false;
         conLevel["open_road"].buttonMode = true;
         conLevel["open_road"].addEventListener(MouseEvent.CLICK,this.onOpenRoadHandler);
         conLevel["bbox_mc"].visible = false;
         this.controlArr = [];
         var _loc1_:uint = 0;
         while(_loc1_ < 4)
         {
            conLevel["btn_" + _loc1_].addEventListener(MouseEvent.CLICK,this.onBtnHandler);
            _loc1_++;
         }
         this.lightcontrolArr = [];
         var _loc2_:uint = 0;
         while(_loc2_ < 3)
         {
            conLevel["light_" + _loc2_].addEventListener(MouseEvent.CLICK,this.onLightHandler);
            conLevel["light_" + _loc2_].buttonMode = true;
            _loc2_++;
         }
         conLevel["pan_mc"].buttonMode = true;
         conLevel["pan_mc"].addEventListener(MouseEvent.CLICK,this.onPanMCClickHandler);
      }
      
      private function getAward() : Boolean
      {
         var _loc1_:Number = 10 * Math.random();
         if(_loc1_ < 5)
         {
            return true;
         }
         return false;
      }
      
      private function onBtnHandler(param1:MouseEvent) : void
      {
         var _loc5_:DayGiftController = null;
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         _loc2_.removeEventListener(MouseEvent.CLICK,this.onBtnHandler);
         _loc2_.enabled = false;
         _loc2_.gotoAndStop(2);
         var _loc3_:String = _loc2_.name;
         var _loc4_:uint = uint(_loc3_.split("_")[1]);
         this.controlArr.push(_loc4_);
         if(this.controlArr.length == 4)
         {
            if(ArrayUtils.eq(this.controlArr,this.resultArr))
            {
               DebugTrace.show("奖品兑现 ");
               (_loc5_ = new DayGiftController(22,5)).addEventListener(DayGiftController.COUNT_SUCCESS,this.onCountSuccess);
               _loc5_.getCount();
            }
         }
         else if(this.controlArr.length > 4)
         {
            this.controlArr = [];
         }
      }
      
      private function onPanMCClickHandler(param1:MouseEvent) : void
      {
         var t:uint = 0;
         var type:uint = 0;
         var gift:DayGiftController = null;
         var e:MouseEvent = param1;
         if(!this._isTurn)
         {
            ++_count;
            conLevel["pan_mc"].gotoAndStop(2);
            this._isTurn = true;
         }
         t = setTimeout(function():void
         {
            clearTimeout(t);
            conLevel["pan_mc"].gotoAndStop(1);
            _isTurn = false;
         },500);
         if(_count == 3)
         {
            type = 0;
            if(this.getAward())
            {
               type = 20;
            }
            else
            {
               type = 21;
            }
            gift = new DayGiftController(type,1);
            gift.addEventListener(DayGiftController.COUNT_SUCCESS,this.onCountSuccess);
            gift.getCount();
         }
      }
      
      private function onCountSuccess(param1:Event) : void
      {
         var event:Event = param1;
         var gift:DayGiftController = event.currentTarget as DayGiftController;
         gift.sendToServer(function(param1:DayTalkInfo):void
         {
            var _loc2_:CateInfo = null;
            var _loc3_:uint = 0;
            var _loc4_:uint = 0;
            for each(_loc2_ in param1.outList)
            {
               _loc3_ = uint(_loc2_.id);
               _loc4_ = uint(_loc2_.count);
               ItemInBagAlert.show(_loc3_,_loc4_ + "个<font color=\'#ff0000\'>" + ItemXMLInfo.getName(_loc3_) + "</font>已经放入你的储存箱中！");
            }
         });
      }
      
      public function onSwitchClick() : void
      {
         var t2:uint = 0;
         AnimateManager.playMcAnimate(animatorLevel["switch_mc"],2,"mc",function():void
         {
            conLevel["bbox_mc"].visible = true;
            if(BufferRecordManager.getState(MainManager.actorInfo,0))
            {
               conLevel["box_mc"].buttonMode = false;
               conLevel["box_mc"].mouseEnabled = false;
            }
         });
         animatorLevel["conveyor"].gotoAndStop(2);
         t2 = setTimeout(function():void
         {
            clearTimeout(t2);
            conveyorMC = animatorLevel["conveyor"]["mc"];
         },300);
      }
      
      public function onBoxClick() : void
      {
         AnimateManager.playMcAnimate(conLevel["bbox_mc"],3,"image",function():void
         {
            FitmentAction.buyItem(500824,false);
            BufferRecordManager.setState(MainManager.actorInfo,0,true);
            conLevel["box_mc"].buttonMode = false;
            conLevel["box_mc"].mouseEnabled = false;
         });
      }
      
      private function onOpenRoadHandler(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(typeLevel["road_mc"]);
         conLevel["open_road"].gotoAndStop(2);
         animatorLevel["road_block"].gotoAndStop(2);
         conLevel["open_road"].buttonMode = false;
         MapManager.currentMap.makeMapArray();
      }
      
      private function onLightHandler(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         _loc2_.removeEventListener(MouseEvent.CLICK,this.onBtnHandler);
         _loc2_.enabled = false;
         _loc2_.gotoAndStop(2);
         var _loc3_:String = _loc2_.name;
         var _loc4_:uint = uint(_loc3_.split("_")[1]);
         this.lightcontrolArr.push(_loc4_);
         if(this.lightcontrolArr.length == 3)
         {
            if(this.conveyorMC)
            {
               this.conveyorMC.addEventListener(Event.ENTER_FRAME,this.onFrameEventHandler);
            }
         }
      }
      
      private function onFrameEventHandler(param1:Event) : void
      {
         var e:Event = param1;
         if(this.conveyorMC.currentFrame == this.conveyorMC.totalFrames)
         {
            this.conveyorMC.removeEventListener(Event.ENTER_FRAME,this.onFrameEventHandler);
            this.conveyorMC.gotoAndStop(this.conveyorMC.totalFrames);
            AnimateManager.playMcAnimate(animatorLevel["fireworks_mc"],2,"box",function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("jimiEffect"));
            });
         }
      }
      
      override public function destroy() : void
      {
         if(this.conveyorMC)
         {
            this.conveyorMC.removeEventListener(Event.ENTER_FRAME,this.onFrameEventHandler);
         }
         var _loc1_:uint = 0;
         while(_loc1_ < 4)
         {
            conLevel["btn_" + _loc1_].removeEventListener(MouseEvent.CLICK,this.onBtnHandler);
            _loc1_++;
         }
         this.lightcontrolArr = [];
         var _loc2_:uint = 0;
         while(_loc2_ < 3)
         {
            conLevel["light_" + _loc2_].removeEventListener(MouseEvent.CLICK,this.onLightHandler);
            _loc2_++;
         }
         this._isTurn = false;
      }
   }
}

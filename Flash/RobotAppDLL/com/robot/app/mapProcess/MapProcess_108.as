package com.robot.app.mapProcess
{
   import com.robot.app.fightLevel.FightLevelModel;
   import com.robot.app.freshFightLevel.FightLevelModel;
   import com.robot.app.mapProcess.control.SpaceGuardController;
   import com.robot.app.sys.SysSOManager;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.DialogBox;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_108 extends BaseMapProcess
   {
       
      
      private var panel:AppModel;
      
      private var timer:Timer;
      
      private var _townMc:MovieClip;
      
      private var _moveMC:MovieClip;
      
      private var _spaceShip:MovieClip;
      
      private var exMc:MovieClip;
      
      private var expanel:AppModel;
      
      private var _handler:Function;
      
      public function MapProcess_108()
      {
         super();
      }
      
      private static function getBagPetLevel() : uint
      {
         var _loc2_:uint = 0;
         var _loc3_:PetListInfo = null;
         var _loc1_:uint = 0;
         for each(_loc3_ in PetManager.getBagMap())
         {
            _loc2_ = uint(PetManager.getPetInfo(_loc3_.catchTime).level);
            _loc1_ = Math.max(_loc1_,_loc2_);
         }
         return _loc1_;
      }
      
      override protected function init() : void
      {
         SpaceGuardController.addGuard();
         this.timer = new Timer(9000);
         this.timer.addEventListener(TimerEvent.TIMER,this.onTimer);
         this.timer.start();
         var _loc1_:DialogBox = new DialogBox();
         _loc1_.show("勇者之塔更新了，赛尔勇士们前进吧！",0,-85,conLevel["npc"]);
         this.configTown();
         this._moveMC = this.conLevel["moveMC"];
         this._moveMC.gotoAndStop(1);
         getDefinitionByName("com.robot.app2.mapProcess.control.SpiderController").initMap108(this);
      }
      
      private function onClickExchangeHandler(param1:MouseEvent) : void
      {
         if(!this.expanel)
         {
            this.expanel = new AppModel(ClientConfig.getAppModule("YuanDanExchangePanel"),"正在打开");
            this.expanel.setup();
         }
         this.expanel.show();
      }
      
      public function onEnterHandler() : void
      {
         AnimateManager.playMcAnimate(this._moveMC,0,"",function():void
         {
            MapManager.changeMap(405);
         });
      }
      
      public function trialsFunc() : void
      {
         com.robot.app.freshFightLevel.FightLevelModel.setUp();
      }
      
      private function configTown() : void
      {
         this._townMc = conLevel["townMc"];
         this._townMc["llmc"].visible = false;
         this._townMc.addEventListener(MouseEvent.MOUSE_OVER,this.onTownOverHandler);
         this._townMc.addEventListener(MouseEvent.MOUSE_OUT,this.onTownOutHandler);
         this._townMc["mc"]["mc"].gotoAndStop(1);
         conLevel["lightMc1"].buttonMode = true;
         conLevel["lightMc1"].addEventListener(MouseEvent.CLICK,this.onLightMc1Handler);
         conLevel["lightMc2"].buttonMode = true;
         conLevel["lightMc2"].addEventListener(MouseEvent.CLICK,this.onLightMc2Handler);
      }
      
      private function onTownOverHandler(param1:MouseEvent) : void
      {
         this._townMc["llmc"].visible = true;
         this._townMc["llmc"].gotoAndPlay(2);
      }
      
      private function onTownOutHandler(param1:MouseEvent) : void
      {
         this._townMc["llmc"].visible = false;
         this._townMc["llmc"].gotoAndStop(1);
      }
      
      private function onLightMc1Handler(param1:MouseEvent) : void
      {
         conLevel["lightMc1"].gotoAndStop(2);
         if(conLevel["lightMc2"].currentFrame == 2)
         {
            this.openDoor();
         }
      }
      
      private function onLightMc2Handler(param1:MouseEvent) : void
      {
         conLevel["lightMc2"].gotoAndStop(2);
         if(conLevel["lightMc1"].currentFrame == 2)
         {
            this.openDoor();
         }
      }
      
      private function openDoor() : void
      {
         ToolTipManager.remove(this._townMc);
         ToolTipManager.add(this._townMc,"勇者之塔神秘领域");
         this._townMc["mc"]["mc"].gotoAndPlay(1);
         this._townMc["mc"].gotoAndPlay(2);
         this._townMc.addEventListener(Event.ENTER_FRAME,this.onEnterHandler2);
      }
      
      private function onEnterHandler2(param1:Event) : void
      {
         if(this._townMc["mc"].currentFrame == this._townMc["mc"].totalFrames)
         {
            this._townMc["mc"]["mc"].gotoAndStop(1);
         }
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         var _loc2_:DialogBox = new DialogBox();
         _loc2_.show("要申请创建战队的赛尔们，请到我这里来!",0,-85,conLevel["npc"]);
      }
      
      override public function destroy() : void
      {
         ToolBarController.showOrHideAllUser(true);
         if(this.panel)
         {
            this.panel.destroy();
            this.panel = null;
         }
         this.timer.removeEventListener(TimerEvent.TIMER,this.onTimer);
         this.timer.stop();
         this.timer = null;
         this._townMc.removeEventListener(MouseEvent.MOUSE_OVER,this.onTownOverHandler);
         this._townMc.removeEventListener(MouseEvent.MOUSE_OUT,this.onTownOutHandler);
         this._townMc.removeEventListener(Event.ENTER_FRAME,this.onEnterHandler2);
         conLevel["lightMc1"].removeEventListener(MouseEvent.CLICK,this.onLightMc1Handler);
         conLevel["lightMc2"].removeEventListener(MouseEvent.CLICK,this.onLightMc2Handler);
         ToolTipManager.remove(this._townMc);
         this._townMc = null;
      }
      
      public function fightTownHandler() : void
      {
         if(this._townMc["mc"].currentFrame != 1)
         {
            SocketConnection.send(1022,86053864);
            MapManager.changeLocalMap(10032);
            return;
         }
         SocketConnection.send(1022,86053863);
         SysSOManager.freshLastSys(11002);
         this.checkIsFight(function(param1:Boolean):void
         {
            if(param1)
            {
               com.robot.app.fightLevel.FightLevelModel.setUp();
            }
            else
            {
               Alarm.show("    勇者之塔里的精灵非常强大，30级以上的精灵才能勉强过关，你可以先去教官办公室里的试炼之塔锻炼你的精灵哦。");
            }
         });
      }
      
      private function checkIsFight(param1:Function) : void
      {
         this._handler = param1;
         if(PetManager.getBagMap().length == 0)
         {
            Alarm.show("没有可出战的精灵哦！");
            return;
         }
         this._handler(this.checkBag(1,30));
      }
      
      private function checkBag(param1:int = 1, param2:uint = 1) : Boolean
      {
         var _loc3_:Array = null;
         var _loc4_:PetInfo = null;
         var _loc5_:int = 0;
         var _loc6_:int = 0;
         if(PetManager.getBagMap().length < param1)
         {
            return false;
         }
         _loc3_ = PetManager.infos;
         _loc5_ = 0;
         _loc6_ = 0;
         while(_loc6_ < _loc3_.length)
         {
            if((_loc4_ = _loc3_[_loc6_] as PetInfo).level >= param2)
            {
               _loc5_++;
            }
            _loc6_++;
         }
         if(_loc5_ >= param1)
         {
            return true;
         }
         return false;
      }
   }
}

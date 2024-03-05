package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.ogre.OgreController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.OgreXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.net.SocketConnection;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.utils.Timer;
   import org.taomee.manager.ToolTipManager;
   
   public class ShinePetController extends ActivityControl
   {
       
      
      private var _map:BaseMapProcess;
      
      private var _timer:Timer;
      
      private var _model:Array;
      
      private var _currentModel:OgreModel;
      
      private var _pet1:Array;
      
      private var _pet2:Array;
      
      public function ShinePetController(param1:Array)
      {
         this._pet1 = [[164,164,164,164,164,164,164],[164,164,164,164,164,284,2186],[164,164,164,164,284,2208,409],[164,164,164,164,164,409,1500]];
         this._pet2 = [[164,164,164,164,164,164,164],[164,164,164,164,164,284,2186],[164,164,164,164,2208,409,2305],[164,164,164,164,164,1500,2305]];
         super(param1);
      }
      
      public function setup(param1:BaseMapProcess) : void
      {
         this._map = param1;
         ToolTipManager.add(this._map.conLevel["board"],"闪光精灵大派对 疯狂模式");
         this._map.conLevel["board"].addEventListener(MouseEvent.CLICK,this.showPanel);
         this._map.conLevel["board"].visible = true;
         this._map.topLevel["sun"].mouseEnabled = false;
         this._map.topLevel["sun"].mouseChildren = false;
         this._map.topLevel["sun"].visible = false;
         this._timer = new Timer(20000);
         this._timer.addEventListener(TimerEvent.TIMER,this.onTimer);
         this._timer.start();
         this.onTimer(null);
         MapManager.addEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapDown);
      }
      
      private function showPanel(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ShinePetPartyForCrazyPartyPanel"),"正在打开面板....");
      }
      
      private function get petArr() : Array
      {
         if(SystemTimerManager.sysBJDate.hours == 16 || SystemTimerManager.sysBJDate.hours == 17)
         {
            return this._pet2;
         }
         return this._pet1;
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         var _loc2_:Array = null;
         var _loc3_:Array = null;
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         var _loc7_:Point = null;
         var _loc8_:OgreModel = null;
         this.destroy(false);
         if(super.isInActivityTime)
         {
            this._map.topLevel.mouseEnabled = false;
            this._map.topLevel.mouseChildren = false;
            OgreController.isShow = false;
            this._map.topLevel["sun"].visible = true;
            _loc2_ = OgreXMLInfo.getOgreList(10).concat();
            this._model = [];
            if((_loc4_ = Math.floor(Math.random() * 100)) < 60)
            {
               _loc3_ = this.petArr[0];
            }
            else if(_loc4_ >= 60 && _loc4_ < 78)
            {
               _loc3_ = this.petArr[1];
            }
            else if(_loc4_ >= 78 && _loc4_ < 88)
            {
               _loc3_ = this.petArr[2];
            }
            else if(_loc4_ >= 88 && _loc4_ < 100)
            {
               _loc3_ = this.petArr[3];
            }
            else
            {
               _loc3_ = this.petArr[0];
            }
            OgreModel.isShow = true;
            _loc5_ = 0;
            while(_loc5_ < 7)
            {
               _loc6_ = Math.floor(Math.random() * _loc2_.length);
               _loc7_ = _loc2_[_loc6_];
               _loc2_.splice(_loc6_,1);
               (_loc8_ = new OgreModel(_loc5_ + 10000)).name = PetXMLInfo.getName(_loc3_[_loc5_]);
               _loc8_.show(_loc3_[_loc5_],_loc7_);
               _loc8_.addEventListener(MouseEvent.CLICK,this.onOgreClick);
               this._model.push(_loc8_);
               _loc5_++;
            }
            OgreModel.isShow = false;
         }
         else
         {
            OgreController.isShow = true;
            if(Boolean(this._map) && Boolean(this._map.topLevel["sun"]))
            {
               this._map.topLevel["sun"].visible = false;
               this._map.conLevel["board"].visible = false;
            }
         }
      }
      
      private function onOgreClick(param1:MouseEvent) : void
      {
         this._currentModel = param1.currentTarget as OgreModel;
         MainManager.actorModel.walkAction(this._currentModel.pos);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter);
      }
      
      private function onEnter(param1:RobotEvent) : void
      {
         var _loc2_:String = null;
         var _loc3_:uint = 0;
         if(this._currentModel != null)
         {
            if(Point.distance(MainManager.actorModel.pos,this._currentModel.pos) < 20)
            {
               SocketConnection.send(1022,86059386);
               switch(this._currentModel.id)
               {
                  case 164:
                     SocketConnection.send(1022,86059387);
                     _loc2_ = "闪光皮皮";
                     _loc3_ = 1;
                     break;
                  case 284:
                     SocketConnection.send(1022,86059396);
                     _loc2_ = "闪光利利";
                     _loc3_ = 3;
                     break;
                  case 2208:
                     SocketConnection.send(1022,86059393);
                     _loc2_ = "闪光奇洛";
                     _loc3_ = 5;
                     break;
                  case 409:
                     SocketConnection.send(1022,86059390);
                     _loc2_ = "闪光格林";
                     _loc3_ = 7;
                     break;
                  case 1500:
                     SocketConnection.send(1022,86059399);
                     _loc2_ = "闪光阿兹";
                     _loc3_ = 9;
                     break;
                  case 2186:
                     SocketConnection.send(1022,86059402);
                     _loc2_ = "闪光布鲁";
                     _loc3_ = 11;
                     break;
                  case 2305:
                     SocketConnection.send(1022,86059405);
                     _loc2_ = "闪光格里多格";
                     _loc3_ = 13;
               }
               FightManager.fightWithBoss(_loc2_,_loc3_);
            }
         }
      }
      
      private function onMapDown(param1:MapEvent) : void
      {
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter);
      }
      
      public function destroy(param1:Boolean = true) : void
      {
         var _loc2_:OgreModel = null;
         if(param1)
         {
            OgreController.isShow = true;
            ToolTipManager.remove(this._map.conLevel["board"]);
            this._map.conLevel["board"].removeEventListener(MouseEvent.CLICK,this.showPanel);
            this._map = null;
            ModuleManager.destroy(ClientConfig.getAppModule("SupermarketPanel"));
            this._timer.stop();
            this._timer.removeEventListener(TimerEvent.TIMER,this.onTimer);
            this._timer == null;
            MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapDown);
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter);
         }
         if(this._model != null)
         {
            for each(_loc2_ in this._model)
            {
               _loc2_.removeEventListener(MouseEvent.CLICK,this.onOgreClick);
               _loc2_.destroy();
               _loc2_ = null;
            }
         }
         this._model = null;
      }
   }
}

package com.robot.app.mapProcess
{
   import com.robot.app.mapProcess.control.SpaceGuardController;
   import com.robot.app.sys.SysSOManager;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.SpaceGuardXMLInfo;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.RobotModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NpcInfo;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.loading.Loading;
   import com.robot.core.utils.Direction;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.text.TextField;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_503 extends BaseMapProcess
   {
       
      
      private var _obj:Object;
      
      public function MapProcess_503()
      {
         super();
      }
      
      private static function loadGuideGuard() : void
      {
         var mcloader:MCLoader = null;
         mcloader = new MCLoader(ClientConfig.getResPath("active/" + "lostTemple_guard.swf"),null,Loading.TITLE_AND_PERCENT,"加载..");
         mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
         {
            mcloader.removeEventListener(MCLoadEvent.SUCCESS,arguments.callee);
            var _loc3_:MovieClip = mcloader.loader.content["guard"];
            MapManager.currentMap.depthLevel.addChild(_loc3_);
            _loc3_.x = 710;
            _loc3_.y = 435;
            AnimateManager.playMcAnimate(_loc3_);
         });
         mcloader.doLoad();
      }
      
      override protected function init() : void
      {
         SocketConnection.send(1022,86064694);
         if(BufferRecordManager.getMyState(585))
         {
            SpaceGuardController.addGuard();
            conLevel["lostTemple"].gotoAndStop(1);
         }
         else
         {
            loadGuideGuard();
            conLevel["lostTemple"].gotoAndStop(2);
         }
         ToolTipManager.add(conLevel["battleLabMC"] as MovieClip,"作战实验室");
         (conLevel["battleLabMC"] as MovieClip).buttonMode = true;
         (conLevel["battleLabMC"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onMouseBattleLab);
         MapListenerManager.add(conLevel["lostTemple"],this.goLostTemple,"失落的远古神殿");
         MapListenerManager.add(conLevel["expedition"],function():void
         {
            MapManager.changeMapWithCallback(1153,function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("MineDefendWarPanel"));
            });
         },"星际迷航");
         Alarm.show("精灵太空站已消失在时空中，请前往全新的贾斯汀太空站！",function():void
         {
            MapManager.changeMap(1147);
         });
      }
      
      private function initLostTemple() : void
      {
         var mcloader:MCLoader = null;
         if(!BufferRecordManager.getMyState(585))
         {
            mcloader = new MCLoader(ClientConfig.getResPath("active/" + "lostTemple_guard.swf"),null,Loading.TITLE_AND_PERCENT,"加载..");
            mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
            {
               mcloader.removeEventListener(MCLoadEvent.SUCCESS,arguments.callee);
               var _loc3_:MovieClip = mcloader.loader.content["guard"];
               MapManager.currentMap.depthLevel.addChild(_loc3_);
               _loc3_.x = SpaceGuardXMLInfo.getPosi(MapManager.currentMap.id)[0];
               _loc3_.y = SpaceGuardXMLInfo.getPosi(MapManager.currentMap.id)[1];
            });
            mcloader.doLoad();
         }
      }
      
      private function goLostTemple(param1:*) : void
      {
         var e:* = param1;
         if(BufferRecordManager.getMyState(585))
         {
            MapManager.changeMap(816);
         }
         else
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20130322_2"),function():void
            {
               MapManager.changeMap(816);
            });
         }
      }
      
      private function getWinnerInfo() : void
      {
         SocketConnection.addCmdListener(CommandID.BATTLE_LAB_RECORD_INFO,this.onGetRecordInfo);
         SocketConnection.send(CommandID.BATTLE_LAB_RECORD_INFO);
      }
      
      private function onGetRecordInfo(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.BATTLE_LAB_RECORD_INFO,this.onGetRecordInfo);
         var _loc2_:ByteArray = param1.data as ByteArray;
         this._obj = new Object();
         this._obj.userId = _loc2_.readUnsignedInt();
         if(this._obj.userId == 0)
         {
            return;
         }
         this._obj.nick = _loc2_.readUTFBytes(16);
         this._obj.maxRecord = _loc2_.readUnsignedInt();
         this._obj.time = _loc2_.readUnsignedInt();
         this._obj.clothsNum = _loc2_.readUnsignedInt();
         var _loc3_:Array = new Array();
         var _loc4_:uint = 0;
         while(_loc4_ < this._obj.clothsNum)
         {
            _loc3_.push(_loc2_.readUnsignedInt());
            _loc2_.readUnsignedInt();
            _loc4_++;
         }
         this._obj.arr = _loc3_;
         this.createHero();
      }
      
      private function createHero() : void
      {
         var _loc1_:NpcInfo = new NpcInfo();
         _loc1_.dir = Direction.DOWN;
         _loc1_.npcName = this._obj.nick;
         _loc1_.clothIds = this._obj.arr;
         _loc1_.point = new Point(480,244);
         var _loc2_:RobotModel = new RobotModel(_loc1_);
         DisplayUtil.stopAllMovieClip(_loc2_.skeleton.getBodyMC());
         _loc2_.nameTxt.visible = false;
         _loc2_.skeleton.getBodyMC().scaleX = _loc2_.skeleton.getBodyMC().scaleY = 1.2;
         (conLevel["nameTxt"] as TextField).text = this._obj.nick;
      }
      
      private function onMouseBattleLab(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MapManager.changeMapWithCallback(1151,function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("NewBattleLaboratoryMainPanel"));
         });
      }
      
      private function onMouseHero(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("BattleLabWinnerInfoPanel"),"正在打开战斗实验室查看战绩面板",this._obj);
      }
      
      public function onTrainDoor() : void
      {
         SocketConnection.send(1022,86053855);
         ModuleManager.showModule(ClientConfig.getAppModule("TrainDoorEnterPanel"),"正在打开面板");
         SysSOManager.freshLastSys(11006);
      }
      
      public function onHigherDoor() : void
      {
         SocketConnection.send(1022,86053853);
         ModuleManager.showModule(ClientConfig.getAppModule("HigherFightChoicePanel"),"正在打开面板");
         SysSOManager.freshLastSys(14005);
      }
      
      override public function destroy() : void
      {
         ToolTipManager.remove(conLevel["battleLabMC"] as MovieClip);
         ToolTipManager.remove(btnLevel["heroBtn"] as SimpleButton);
         (conLevel["battleLabMC"] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onMouseBattleLab);
      }
   }
}

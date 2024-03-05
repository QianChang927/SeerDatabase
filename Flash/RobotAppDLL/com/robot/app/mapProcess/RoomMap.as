package com.robot.app.mapProcess
{
   import com.robot.app.control.NewGreenHouse2021Controller;
   import com.robot.app.control.TVNoticeController;
   import com.robot.app.homeToolBarPanel.HomeToolBarContoller;
   import com.robot.app.npc.taskPanel.NpcTaskPanel;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.sceneInteraction.RoomFitment;
   import com.robot.app.sceneInteraction.RoomMachShow;
   import com.robot.app.sceneInteraction.RoomPetShow;
   import com.robot.app.storage.StorageController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.tasksRecord.TasksRecordConfig;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app.user.UserInfoController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.FitmentEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.info.NonoInfo;
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.FitmentManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.UserInfoManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.INpcModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.alert.WelcomeAlarm;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   import gs.TweenLite;
   import gs.easing.Back;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class RoomMap extends BaseMapProcess
   {
      
      private static var _showFriend:Boolean = false;
       
      
      private var _roomFitment:RoomFitment;
      
      private var _isEdieing:Boolean = false;
      
      private var _roomPet:RoomPetShow;
      
      private var _roomNono:RoomMachShow;
      
      private var _map:SimpleButton;
      
      private var _goHome:SimpleButton;
      
      private var _nonoToolbar:MovieClip;
      
      private var _nonoToolbarTips:Array;
      
      private var _box:MovieClip;
      
      private var _btnListMc:MovieClip;
      
      public function RoomMap()
      {
         this._nonoToolbarTips = ["精灵恢复","精灵仓库","经验分配","精灵孵化器","基地动态"];
         super();
      }
      
      override protected function init() : void
      {
         this.updateUserInfo();
         this._roomFitment = new RoomFitment();
         this._roomPet = new RoomPetShow(MainManager.actorInfo.mapID);
         this._roomNono = new RoomMachShow(MainManager.actorInfo.mapID);
         if(MainManager.actorModel.nono)
         {
            MainManager.actorModel.showNono(NonoManager.info,MainManager.actorInfo.actionType);
         }
         if(MainManager.actorID == MainManager.actorInfo.mapID)
         {
            this.actorRoomInit();
         }
         else
         {
            this.otherRoomInit();
            SocketConnection.send(1022,86049129);
         }
         this.addEvent();
         if(_showFriend)
         {
            this.onFriend(null);
         }
         TasksManager.accept(1198,function(param1:Boolean):void
         {
            TasksManager.complete(1198,0);
         });
         NewGreenHouse2021Controller.getInstance().updateUserInfo();
      }
      
      private function onClickBox(param1:Event) : void
      {
         LevelManager.showOrRemoveMapLevelandToolslevel(true);
         SocketConnection.send(CommandID.COMMAND_4548,222,1);
         DisplayUtil.removeForParent(this._box);
         this._box = null;
         TVNoticeController.showCurrentPanel();
      }
      
      private function onClickZhu(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.SHIPER,[TasksRecordConfig.getNewMainLineZhuangzhiStartDes()],TasksRecordConfig.getNewMainLineZhuangzhiEndDes().split("|"),[function():void
         {
            SocketConnection.send(1022,86053057);
            MapManager.changeMap(4);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:*):void
            {
               var _loc4_:* = undefined;
               var _loc5_:* = undefined;
               var _loc3_:* = TasksRecordConfig.getNewMainLineTaskId();
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               NpcTaskPanel.setFocusTask(_loc3_);
               if(MapManager.currentMap.id == 4)
               {
                  _loc4_ = getDefinitionByName("com.robot.app.npc.taskPanel.NpcTaskPanel");
                  _loc5_ = NpcController.getNpc(NPC.SHIPER) as INpcModel;
                  _loc4_.show(_loc5_.tasks,_loc5_.npcInfo);
               }
            });
         }],false,null,false);
      }
      
      private function updateUserInfo() : void
      {
         UserInfoManager.getInfo(MapManager.currentMap.id,function(param1:UserInfo):void
         {
            if(topLevel["menpaiMc"])
            {
               topLevel["menpaiMc"].buttonMode = true;
               topLevel["menpaiMc"].addEventListener(MouseEvent.CLICK,onDoorPlateInfo);
               topLevel["menpaiMc"]["txt"].mouseEnabled = false;
               topLevel["menpaiMc"]["txt"].text = param1.nick;
            }
            MapNamePanel.nameText = param1.nick + "的基地";
         });
      }
      
      private function onDoorPlateInfo(param1:MouseEvent) : void
      {
         UserInfoController.show(MainManager.actorInfo.mapID);
      }
      
      private function actorRoomInit() : void
      {
         this._roomFitment.getStorageInfo();
         if(this._btnListMc == null)
         {
            this._btnListMc = UIManager.getMovieClip("Room_btnlist_Mc");
            this._btnListMc.x = 0;
            this._btnListMc.y = 0;
            this._btnListMc["bg"].mouseChildren = false;
            this._btnListMc["bg"].mouseEnabled = false;
            LevelManager.iconLevel.addChild(this._btnListMc);
         }
         this._btnListMc.gotoAndStop(1);
      }
      
      private function otherRoomInit() : void
      {
         this._map = UIManager.getButton("ui_Home_map_btn");
         this._map.x = 20;
         this._map.y = 344;
         this._map.visible = false;
         LevelManager.iconLevel.addChild(this._map);
         this._goHome = UIManager.getButton("ui_Home_back_btn");
         this._goHome.x = 84;
         this._goHome.y = 348;
         this._goHome.visible = false;
         LevelManager.iconLevel.addChild(this._goHome);
         this._btnListMc = UIManager.getMovieClip("Room_btnlist_Mc");
         this._btnListMc.x = 0;
         this._btnListMc.y = 0;
         this._btnListMc["bg"].mouseChildren = false;
         this._btnListMc["bg"].mouseEnabled = false;
         LevelManager.iconLevel.addChild(this._btnListMc);
         this._btnListMc.gotoAndStop(2);
      }
      
      private function addEvent() : void
      {
         if(this._btnListMc)
         {
            this._btnListMc.addEventListener(MouseEvent.CLICK,this.onBtnListClick);
         }
         if(this._map)
         {
            ToolTipManager.add(this._map,"地图");
            this._map.addEventListener(MouseEvent.CLICK,this.onMapClick);
         }
         if(this._goHome)
         {
            ToolTipManager.add(this._goHome,"我要回家");
            this._goHome.addEventListener(MouseEvent.CLICK,this.onGoHomeClick);
         }
         HomeToolBarContoller.addEventListener(Event.CLOSE,this.onHomeToolbarClose);
         StorageController.addEventListener(Event.COMPLETE,this.onStorageSave);
         StorageController.addEventListener(Event.CANCEL,this.onStorageClose);
      }
      
      private function onBtnListClick(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         switch(evt.target.name)
         {
            case "infoBtn":
               ModuleManager.showAppModule("BaseRoomInfoPanel");
               break;
            case "shopBtn":
               ModuleManager.showAppModule("BaseRoomShopPanel");
               break;
            case "greenhouseBtn":
               this.gotoFrontRoom();
               break;
            case "visitBtn":
               ModuleManager.showAppModule("BaseRoomVisitPanel");
               break;
            case "decorateBtn":
               if(SystemTimerManager.mingganshiqi())
               {
                  return;
               }
               if(!this._isEdieing && !StorageController.isTween)
               {
                  FitmentManager.clearlocalUsedList();
                  FitmentManager.addEventListener(FitmentEvent.STORAGE_LIST,function(param1:* = null):void
                  {
                     FitmentManager.removeEventListener(FitmentEvent.STORAGE_LIST,arguments.callee);
                     onEdie(null);
                  });
                  FitmentManager.getStorageInfo();
               }
               break;
            case "roomBtn":
               MapManager.changeMap(MainManager.actorID);
               break;
            case "praiseBtn":
               KTool.getMultiValue([200329,200330,200331,200332,200333,200334,200335,200336,200337,200338],function(param1:Array):void
               {
                  var num:int = 0;
                  var va:Array = param1;
                  num = 0;
                  var i:int = 0;
                  while(i < 5)
                  {
                     if(va[i] > 0)
                     {
                        num++;
                     }
                     i++;
                  }
                  if(num >= 5)
                  {
                     Alarm2.show("很抱歉，今日点赞次数已用完！");
                     return;
                  }
                  if(va.indexOf(MainManager.actorInfo.mapID) != -1)
                  {
                     Alarm2.show("很抱歉，今日已成功点赞该基地！");
                     return;
                  }
                  KTool.socketSendCallBack(41290,function():void
                  {
                     Alarm2.show("点赞成功，今日剩余" + (5 - num - 1) + "次点赞机会！");
                  },[]);
               });
         }
      }
      
      private function onGreenHouse(param1:MouseEvent) : void
      {
         this.gotoFrontRoom();
      }
      
      private function onBook(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getBookModule("RoomBook"),"正在打开基地手册....");
         SocketConnection.send(1022,86049127);
      }
      
      private function onEdie(param1:MouseEvent) : void
      {
         this._isEdieing = true;
         this._roomFitment.openDrag();
         if(this._btnListMc)
         {
            this._btnListMc.visible = false;
         }
         if(this._nonoToolbar)
         {
            this._nonoToolbar.visible = false;
         }
         var _loc2_:int = int(MainManager.getStageHeight());
         TweenLite.to(ToolBarController.panel,0.4,{"y":_loc2_ + 90});
         this.onStorage(null);
         SocketConnection.send(1022,86049125);
      }
      
      private function onFriend(param1:MouseEvent) : void
      {
         if(this._btnListMc)
         {
            this._btnListMc.visible = false;
         }
         if(this._nonoToolbar)
         {
            this._nonoToolbar.visible = false;
         }
         if(this._map)
         {
            this._map.visible = true;
         }
         if(this._goHome)
         {
            this._goHome.visible = true;
         }
         _showFriend = true;
         ToolBarController.panel.visible = false;
         HomeToolBarContoller.show(HomeToolBarContoller.PANEL_FIGHT,HomeToolBarContoller.PANEL_FRIEND,true);
         SocketConnection.send(1022,86049128);
      }
      
      private function onStorage(param1:MouseEvent) : void
      {
         CommonUI.removeYellowArrow(topLevel);
         StorageController.show();
         FitmentManager.storagePanel = StorageController.panel;
      }
      
      private function onSave(param1:MouseEvent) : void
      {
         FitmentManager.saveInfo();
         this._isEdieing = false;
         this._roomFitment.closeDrag();
         if(this._btnListMc)
         {
            this._btnListMc.visible = true;
         }
         if(this._nonoToolbar)
         {
            this._nonoToolbar.visible = true;
         }
         TweenLite.to(ToolBarController.panel,0.4,{"y":ToolBarController.panel.OLDY});
         SocketConnection.send(1022,86049126);
      }
      
      private function onTick() : void
      {
         if(SystemTimerManager.time % 60 == 0)
         {
            if(this._nonoToolbar["nono"].currentFrame == 1)
            {
               AnimateManager.playMcAnimate(this._nonoToolbar["nono"],2,"mc",function():void
               {
                  if(_nonoToolbar)
                  {
                     _nonoToolbar["nono"].gotoAndStop(1);
                  }
               },false,false);
            }
         }
      }
      
      private function onNono(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         CommonUI.setEnabled(this._nonoToolbar["btn_nono"],false,false);
         SocketConnection.addCmdListener(CommandID.NONO_INFO,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.NONO_INFO,arguments.callee);
            var _loc3_:NonoInfo = param1.data as NonoInfo;
            ModuleManager.showModule(ClientConfig.getAppModule("NonoInfoPanel"),"正在打开NoNo信息面板...",_loc3_);
            CommonUI.setEnabled(_nonoToolbar["btn_nono"],true,false);
         });
         SocketConnection.send(CommandID.NONO_INFO,MainManager.actorInfo.mapID);
      }
      
      private function onNonoOver(param1:MouseEvent) : void
      {
         TweenLite.to(this._nonoToolbar["toolbar"],0.4,{
            "x":-238,
            "ease":Back.easeOut
         });
         this._nonoToolbar["toolbar"].visible = true;
      }
      
      private function onNonoOut(param1:MouseEvent) : void
      {
         TweenLite.to(this._nonoToolbar["toolbar"],0.4,{
            "x":-20,
            "ease":Back.easeOut
         });
         this._nonoToolbar["toolbar"].visible = false;
      }
      
      private function onToolbarClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var str:String = String(e.currentTarget.name);
         switch(str)
         {
            case "btn_0":
               if(MainManager.actorInfo.superNono)
               {
                  PetManager.cureAll();
               }
               else
               {
                  Alert.show("恢复体力需要花费50赛尔豆，你确定要为你的精灵们恢复体力吗？",function():void
                  {
                     PetManager.cureAll();
                  });
               }
               SocketConnection.send(1022,86049120);
               break;
            case "btn_1":
               ModuleManager.showModule(ClientConfig.getAppModule("PetStorage"),"正在打开精灵仓库....");
               SocketConnection.send(1022,86049122);
               break;
            case "btn_2":
               ModuleManager.showModule(ClientConfig.getAppModule("ExpAdmPanel"),"正在打开经验分配器....");
               SocketConnection.send(1022,86049121);
               break;
            case "btn_3":
               ModuleManager.showAppModule("EggWareHousePanel",1);
               SocketConnection.send(1022,86049123);
               break;
            case "btn_4":
               ModuleManager.showModule(ClientConfig.getAppModule("RoomStatePanel"),"正在加载基地动态....");
               SocketConnection.send(1022,86049124);
         }
      }
      
      private function onMapClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getMapModule("WorldMapPanel"),"正在打开世界地图...");
      }
      
      private function onGoHomeClick(param1:MouseEvent) : void
      {
         MapManager.changeMap(MainManager.actorID);
      }
      
      private function onStorageSave(param1:Event) : void
      {
         if(this._btnListMc)
         {
            this._btnListMc.visible = true;
         }
         this.onSave(null);
      }
      
      private function onStorageClose(param1:Event) : void
      {
         if(this._btnListMc)
         {
            this._btnListMc.visible = true;
         }
         FitmentManager.cancelInfo();
         this._isEdieing = false;
         this._roomFitment.closeDrag();
         StorageController.hide();
         TweenLite.to(ToolBarController.panel,0.4,{"y":ToolBarController.panel.OLDY});
      }
      
      private function onHomeToolbarClose(param1:Event) : void
      {
         if(this._btnListMc)
         {
            this._btnListMc.visible = true;
         }
         if(this._nonoToolbar)
         {
            this._nonoToolbar.visible = true;
         }
         if(this._map)
         {
            this._map.visible = false;
         }
         if(this._goHome)
         {
            this._goHome.visible = false;
         }
         _showFriend = false;
         HomeToolBarContoller.destroy();
         if(ToolBarController.panel)
         {
            ToolBarController.panel.visible = true;
         }
      }
      
      private function startRandom(param1:String) : void
      {
         var _loc2_:int = int(Math.random() * 100);
         if(_loc2_ < 10)
         {
            this.startDailyTask(421,param1);
         }
         else if(_loc2_ < 20)
         {
            this.startDailyTask(422,param1);
         }
         else
         {
            WelcomeAlarm.show("欢迎来到" + param1 + "的基地参观！");
         }
      }
      
      private function startDailyTask(param1:int, param2:String) : void
      {
         var id:int = param1;
         var s:String = param2;
         if(TasksManager.getTaskStatus(id) == TasksManager.UN_ACCEPT)
         {
            TasksManager.accept(id,function(param1:Boolean):void
            {
               if(param1)
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("RoomDailyTaskPanel"),"正在加载面板...",id);
               }
            });
         }
         else if(TasksManager.getTaskStatus(id) == TasksManager.ALR_ACCEPT)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("RoomDailyTaskPanel"),"正在加载面板...",id);
         }
         else
         {
            WelcomeAlarm.show("欢迎来到" + s + "的基地参观！");
         }
      }
      
      private function removeEvent() : void
      {
         var _loc1_:uint = 0;
         if(topLevel["menpaiMc"])
         {
            topLevel["menpaiMc"].removeEventListener(MouseEvent.CLICK,this.onDoorPlateInfo);
         }
         if(this._nonoToolbar)
         {
            SystemTimerManager.removeTickFun(this.onTick);
            ToolTipManager.remove(this._nonoToolbar["btn_nono"]);
            this._nonoToolbar["btn_nono"].removeEventListener(MouseEvent.CLICK,this.onNono);
            this._nonoToolbar.removeEventListener(MouseEvent.MOUSE_OVER,this.onNonoOver);
            this._nonoToolbar.removeEventListener(MouseEvent.MOUSE_OUT,this.onNonoOut);
            _loc1_ = 0;
            while(_loc1_ < 5)
            {
               ToolTipManager.remove(this._nonoToolbar["toolbar"]["btn_" + _loc1_]);
               this._nonoToolbar["toolbar"]["btn_" + _loc1_].removeEventListener(MouseEvent.CLICK,this.onToolbarClick);
               _loc1_++;
            }
            DisplayUtil.removeForParent(this._nonoToolbar);
         }
         if(this._box)
         {
            this._box.removeEventListener(MouseEvent.CLICK,this.onClickBox);
            DisplayUtil.removeForParent(this._box);
         }
         if(this._map)
         {
            ToolTipManager.remove(this._map);
            this._map.removeEventListener(MouseEvent.CLICK,this.onMapClick);
            DisplayUtil.removeForParent(this._map);
         }
         if(this._goHome)
         {
            ToolTipManager.remove(this._goHome);
            this._goHome.removeEventListener(MouseEvent.CLICK,this.onGoHomeClick);
            DisplayUtil.removeForParent(this._goHome);
         }
         HomeToolBarContoller.removeEventListener(Event.CLOSE,this.onHomeToolbarClose);
         StorageController.removeEventListener(Event.COMPLETE,this.onStorageSave);
         StorageController.removeEventListener(Event.CANCEL,this.onStorageClose);
      }
      
      override public function destroy() : void
      {
         this.removeEvent();
         this._roomFitment.destroy();
         this._roomFitment = null;
         this._roomPet.destroy();
         this._roomPet = null;
         this._roomNono.destroy();
         this._roomNono = null;
         this._nonoToolbar = null;
         DisplayUtil.removeForParent(this._btnListMc);
         this._btnListMc = null;
         this._map = null;
         this._goHome = null;
         this._box = null;
         StorageController.destroy();
         HomeToolBarContoller.destroy();
         ToolBarController.panel.y = ToolBarController.panel.OLDY;
      }
      
      public function gotoFrontRoom() : void
      {
         Alarm2.show("太空温室正在升级中，敬请期待！");
      }
      
      public function get roomFitment() : RoomFitment
      {
         return this._roomFitment;
      }
   }
}

package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.xml.BiSuoKongJianRoomXmlInfo;
   import com.robot.core.controller.BiSuoKongJianEnterController;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LeftToolBarManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class BiSuoKongJianMapController
   {
       
      
      private var map:BaseMapProcess;
      
      private var eventIdx:int;
      
      private var random:int;
      
      private var showDialogStr:String;
      
      private var showParsStr:String;
      
      private var shownpcsStr:String;
      
      private var roomOver:Boolean;
      
      private var walkIdx:int = -1;
      
      public function BiSuoKongJianMapController()
      {
         super();
      }
      
      public function setUp(param1:BaseMapProcess) : void
      {
         this.map = param1;
         EventManager.addEventListener("bisuo_room_update",this.eventHandle);
         EventManager.addEventListener("bisuo_game_over",this.bGamePanelClose);
         SocketConnection.addCmdListener(45908,this.mapOverHandle);
         (MapManager.currentMap.getMapLevelByName("bg1_mc") as MovieClip).mouseChildren = (MapManager.currentMap.getMapLevelByName("bg1_mc") as MovieClip).mouseEnabled = false;
         this.map.topLevel.addEventListener(MouseEvent.CLICK,this.btnClickHandle);
         var _loc2_:int = 0;
         while(_loc2_ < 3)
         {
            if(this.map.conLevel["npc_" + _loc2_])
            {
               (this.map.conLevel["npc_" + _loc2_] as MovieClip).buttonMode = true;
               this.map.conLevel["npc_" + _loc2_].addEventListener(MouseEvent.CLICK,this.npcClickHandle);
            }
            if(this.map.conLevel["room_" + _loc2_])
            {
               this.map.conLevel["room_" + _loc2_].addEventListener(MouseEvent.CLICK,this.roomClickHandle);
            }
            _loc2_++;
         }
         MapNamePanel.hide();
         LeftToolBarManager.hideBar();
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         this.initRoom();
         this.updateInfo();
      }
      
      private function bGamePanelClose(param1:DynamicEvent) : void
      {
         var tmpId:int = 0;
         var tmpId1:int = 0;
         var e:DynamicEvent = param1;
         if(BiSuoKongJianEnterController.getInstance().type == 3)
         {
            if(e.paramObject)
            {
               tmpId = parseInt(this.showDialogStr.split("_")[1]);
               if(tmpId != 0)
               {
                  getDefinitionByName("com.robot.app2.control.DialogControl").showAllDilogs(177,tmpId).then(function(param1:int):void
                  {
                     showNextRoom();
                  });
               }
               else
               {
                  this.showNextRoom();
               }
            }
            else
            {
               tmpId1 = parseInt(this.showDialogStr.split("_")[2]);
               if(tmpId1 != 0)
               {
                  getDefinitionByName("com.robot.app2.control.DialogControl").showAllDilogs(177,tmpId1).then(function(param1:int):void
                  {
                     showNextRoom();
                  });
               }
               else
               {
                  this.showNextRoom();
               }
            }
         }
      }
      
      private function btnClickHandle(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var ename:String = String(e.target.name);
         switch(ename)
         {
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "leave":
               Alert.show("是否要现在撤离闭锁空间？",function():void
               {
                  SocketConnection.sendByQueue(45905,[2],function(param1:SocketEvent):void
                  {
                  });
               });
         }
      }
      
      private function eventHandle(param1:Event) : void
      {
         this.initRoom(true);
         this.updateInfo();
      }
      
      private function mapOverHandle(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:int = int(_loc2_.readUnsignedInt());
         if(_loc3_ == 2)
         {
            this.roomOver = true;
            this.showExit();
         }
         else if(_loc3_ == 3)
         {
         }
      }
      
      private function initRoom(param1:Boolean = false) : void
      {
         var info:XML;
         var showMap:int = 0;
         var mapFrame:int = 0;
         var dialogs:String = null;
         var pars:String = null;
         var npcs:String = null;
         var dialogArr:Array = null;
         var parsArr:Array = null;
         var npcsArr:Array = null;
         var tmpNpcs:Array = null;
         var tmpDialogIndex:int = 0;
         var tmpId:int = 0;
         var tmpId1:int = 0;
         var i:int = 0;
         var isupdate:Boolean = param1;
         this.roomOver = false;
         this.hideExit();
         info = BiSuoKongJianEnterController.getInstance().roomObj;
         if(BiSuoKongJianEnterController.getInstance().roomOver)
         {
            this.roomOver = true;
            this.showExit();
         }
         if(info)
         {
            showMap = int(info.@showMap);
            mapFrame = showMap % 10;
            (MapManager.currentMap.getMapLevelByName("bg1_mc") as MovieClip).gotoAndStop(mapFrame);
            dialogs = String(info.@showDialog);
            pars = String(info.@param);
            npcs = String(info.@showNpc);
            dialogArr = dialogs.split("|");
            parsArr = pars.split("|");
            npcsArr = npcs.split("|");
            this.random = BiSuoKongJianEnterController.getInstance().randomValue;
            this.showDialogStr = dialogArr[this.random];
            this.showParsStr = parsArr[this.random];
            this.shownpcsStr = npcsArr[this.random];
            if(BiSuoKongJianEnterController.getInstance().type == 2 && !this.roomOver && BiSuoKongJianEnterController.getInstance().updateType == 0)
            {
               getDefinitionByName("com.robot.app2.control.DialogControl").showAllDilogs(177,parseInt(this.showDialogStr.split("_")[0])).then(function(param1:int):void
               {
               });
            }
            else if(BiSuoKongJianEnterController.getInstance().type == 4 && !this.roomOver)
            {
               tmpDialogIndex = parseInt(this.showDialogStr.split("_")[0]);
               if(tmpDialogIndex == 2 || tmpDialogIndex == 10 || tmpDialogIndex == 53)
               {
                  ModuleManager.showAppModule("BisuoKongJianManHuaPanel",{
                     "jq":(tmpDialogIndex == 2 ? 2 : (tmpDialogIndex == 10 ? 3 : 4)),
                     "fun":function(param1:int):void
                     {
                        var haveReward1:* = undefined;
                        var idx:int = param1;
                        if(parseInt(showDialogStr.split("_")[idx]) != 0)
                        {
                           haveReward1 = parseInt(showDialogStr.split("_")[idx - 1]) != 0;
                           SocketConnection.sendByQueue(45902,[BiSuoKongJianEnterController.getInstance().level,BiSuoKongJianEnterController.getInstance().mapType,!!haveReward1 ? 1 : 0],function(param1:SocketEvent):void
                           {
                           });
                        }
                        else
                        {
                           SocketConnection.sendByQueue(45902,[BiSuoKongJianEnterController.getInstance().level,BiSuoKongJianEnterController.getInstance().mapType,1],function(param1:SocketEvent):void
                           {
                           });
                        }
                     }
                  });
               }
               else
               {
                  getDefinitionByName("com.robot.app2.control.DialogControl").showAllDilogs(177,parseInt(this.showDialogStr.split("_")[0])).then(function(param1:int):void
                  {
                     var haveReward:Boolean = false;
                     var idx:int = param1;
                     if(parseInt(showDialogStr.split("_")[idx]) != 0)
                     {
                        haveReward = parseInt(showDialogStr.split("_")[idx - 1]) != 0;
                        getDefinitionByName("com.robot.app2.control.DialogControl").showAllDilogs(177,parseInt(showDialogStr.split("_")[idx])).then(function(param1:int):void
                        {
                           var idx:int = param1;
                           SocketConnection.sendByQueue(45902,[BiSuoKongJianEnterController.getInstance().level,BiSuoKongJianEnterController.getInstance().mapType,haveReward ? 1 : 0],function(param1:SocketEvent):void
                           {
                           });
                        });
                     }
                     else
                     {
                        SocketConnection.sendByQueue(45902,[BiSuoKongJianEnterController.getInstance().level,BiSuoKongJianEnterController.getInstance().mapType,1],function(param1:SocketEvent):void
                        {
                        });
                     }
                  });
               }
            }
            if(BiSuoKongJianEnterController.getInstance().fightWin != -1 && (BiSuoKongJianEnterController.getInstance().type == 1 || BiSuoKongJianEnterController.getInstance().type == 2))
            {
               if(BiSuoKongJianEnterController.getInstance().type == 1)
               {
                  if(BiSuoKongJianEnterController.getInstance().fightWin == MainManager.actorID)
                  {
                     tmpId = parseInt(this.showDialogStr.split("_")[1]);
                     if(tmpId != 0)
                     {
                        if(tmpId == 53)
                        {
                           ModuleManager.showAppModule("BisuoKongJianManHuaPanel",{
                              "jq":4,
                              "fun":function(param1:int):void
                              {
                                 showNextRoom();
                              }
                           });
                        }
                        else
                        {
                           getDefinitionByName("com.robot.app2.control.DialogControl").showAllDilogs(177,tmpId).then(function(param1:int):void
                           {
                              showNextRoom();
                           });
                        }
                     }
                     else
                     {
                        this.showNextRoom();
                     }
                  }
                  else
                  {
                     tmpId1 = parseInt(this.showDialogStr.split("_")[2]);
                     if(tmpId1 != 0)
                     {
                        getDefinitionByName("com.robot.app2.control.DialogControl").showAllDilogs(177,tmpId1).then(function(param1:int):void
                        {
                           showNextRoom();
                        });
                     }
                     else
                     {
                        this.showNextRoom();
                     }
                  }
                  BiSuoKongJianEnterController.getInstance().fightWin = -1;
               }
               else
               {
                  BiSuoKongJianEnterController.getInstance().fightWin = -1;
                  this.showNextRoom();
               }
            }
            tmpNpcs = this.shownpcsStr.split("_");
            if(npcs != "")
            {
               i = 0;
               while(i < 3)
               {
                  if(this.map.conLevel["npc_" + i])
                  {
                     this.map.conLevel["npc_" + i].visible = i < tmpNpcs.length && !this.roomOver && parseInt(tmpNpcs[i]) != 0;
                     if(i < tmpNpcs.length)
                     {
                        this.map.conLevel["npc_" + i].gotoAndStop(parseInt(tmpNpcs[i]));
                     }
                  }
                  i++;
               }
            }
            else
            {
               i = 0;
               while(i < 3)
               {
                  if(this.map.conLevel["npc_" + i])
                  {
                     this.map.conLevel["npc_" + i].visible = false;
                  }
                  i++;
               }
            }
         }
      }
      
      private function showNextRoom() : void
      {
         if(BiSuoKongJianEnterController.getInstance().showNextRoom)
         {
            BiSuoKongJianEnterController.getInstance().showNextRoom = false;
            BiSuoKongJianEnterController.getInstance().nextMainLineRoom();
         }
      }
      
      private function showExit() : void
      {
         var _loc2_:String = null;
         var _loc3_:Array = null;
         var _loc4_:int = 0;
         var _loc5_:XML = null;
         var _loc6_:int = 0;
         var _loc7_:String = null;
         var _loc8_:int = 0;
         var _loc9_:int = 0;
         var _loc1_:XML = BiSuoKongJianEnterController.getInstance().roomObj;
         if(_loc1_)
         {
            _loc2_ = String(_loc1_.@outlevel);
            _loc3_ = _loc2_.split("_");
            _loc4_ = 0;
            while(_loc4_ < 3)
            {
               if(this.map.conLevel["room_" + _loc4_])
               {
                  this.map.conLevel["room_" + _loc4_].visible = _loc4_ < _loc3_.length && parseInt(_loc3_[_loc4_]) != 0;
                  if(_loc4_ < _loc3_.length && parseInt(_loc3_[_loc4_]) != 0)
                  {
                     _loc5_ = BiSuoKongJianRoomXmlInfo.getRoomInfo(parseInt(_loc3_[_loc4_]));
                     _loc6_ = int(_loc5_.@type);
                     if(String(_loc5_.@mainlineType) != "")
                     {
                        _loc7_ = String(_loc5_.@mainlineType);
                        _loc8_ = parseInt(_loc7_.split("_")[0]);
                        _loc9_ = parseInt(_loc7_.split("_")[1]);
                        if(BiSuoKongJianEnterController.getInstance().mainLineValue[_loc8_ - 5] < _loc9_)
                        {
                           _loc6_ = 5;
                        }
                     }
                     if(String(_loc5_.@isHide) != "")
                     {
                        _loc6_ = 7;
                     }
                     this.map.conLevel["room_" + _loc4_].gotoAndStop(_loc6_ + 1);
                  }
               }
               _loc4_++;
            }
         }
      }
      
      private function hideExit() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 3)
         {
            if(this.map.conLevel["room_" + _loc1_])
            {
               this.map.conLevel["room_" + _loc1_].visible = false;
            }
            _loc1_++;
         }
      }
      
      private function addEvent() : void
      {
         MainManager.actorModel.addEventListener(RobotEvent.WALK_END,this.onWalkEnd);
      }
      
      private function removeEvent() : void
      {
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_END,this.onWalkEnd);
      }
      
      private function onWalkEnd(param1:RobotEvent) : void
      {
         var _loc5_:XML = null;
         var _loc6_:String = null;
         var _loc7_:Array = null;
         if(this.walkIdx == -1)
         {
            return;
         }
         var _loc2_:Point = new Point(this.map.conLevel["room_" + this.walkIdx].x,this.map.conLevel["room_" + this.walkIdx].y);
         var _loc3_:Point = MainManager.actorModel.parent.globalToLocal(this.map.conLevel["room_" + this.walkIdx].parent.localToGlobal(_loc2_));
         var _loc4_:int = Point.distance(MainManager.actorModel.pos,_loc3_);
         this.removeEvent();
         if(_loc4_ < 50)
         {
            if(!this.roomOver)
            {
               return;
            }
            _loc5_ = BiSuoKongJianEnterController.getInstance().roomObj;
            _loc7_ = (_loc6_ = String(_loc5_.@outlevel)).split("_");
            BiSuoKongJianEnterController.getInstance().Enter(parseInt(_loc7_[this.walkIdx]));
         }
         else
         {
            this.walkIdx = -1;
         }
      }
      
      private function updateInfo() : void
      {
         KTool.getMultiValue([210501,210509,210504,210505],function(param1:Array):void
         {
            var arr:Array = param1;
            KTool.getPlayerInfo([1649,1651],function(param1:Array):void
            {
               var _loc2_:int = int(arr[0]);
               var _loc3_:int = int(param1[1]);
               map.topLevel["wrz"].gotoAndStop(_loc3_ + 1);
               map.topLevel["num"].text = arr[2];
               map.topLevel["num1"].text = arr[3];
               map.topLevel["level"].text = BiSuoKongJianEnterController.getInstance().level;
               var _loc4_:int = 0;
               while(_loc4_ < 3)
               {
                  if(map.conLevel["npc_" + _loc4_])
                  {
                     if((param1[0] >> _loc4_ * 8 & 255) > 0)
                     {
                        map.conLevel["npc_" + _loc4_].visible = false;
                     }
                  }
                  _loc4_++;
               }
            });
         });
      }
      
      private function roomClickHandle(param1:MouseEvent) : void
      {
         this.removeEvent();
         var _loc2_:int = parseInt(String(param1.currentTarget.name).split("_")[1]);
         var _loc3_:Point = new Point(param1.currentTarget.x,param1.currentTarget.y);
         var _loc4_:Point = MainManager.actorModel.parent.globalToLocal((param1.currentTarget as MovieClip).parent.localToGlobal(_loc3_));
         this.walkIdx = _loc2_;
         this.addEvent();
         MainManager.actorModel.walkAction(_loc4_,false);
      }
      
      private function npcClickHandle(param1:MouseEvent) : void
      {
         var npcidx:int = 0;
         var e:MouseEvent = param1;
         npcidx = parseInt(String(e.currentTarget.name).split("_")[1]);
         if(this.roomOver)
         {
            return;
         }
         switch(BiSuoKongJianEnterController.getInstance().type)
         {
            case 1:
               getDefinitionByName("com.robot.app2.control.DialogControl").showAllDilogs(177,parseInt(this.showDialogStr.split("_")[0])).then(function(param1:int):void
               {
                  if(param1 == 1)
                  {
                     if(showParsStr.indexOf("_") == -1)
                     {
                        FightManager.fightNoMapBoss("",parseInt(showParsStr));
                     }
                     else
                     {
                        FightManager.fightNoMapBoss("",parseInt(showParsStr.split("_")[npcidx]));
                     }
                  }
               });
               break;
            case 2:
               if(this.showParsStr.indexOf("_") == -1)
               {
                  FightManager.fightNoMapBoss("",parseInt(this.showParsStr));
               }
               else
               {
                  FightManager.fightNoMapBoss("",parseInt(this.showParsStr.split("_")[npcidx]));
               }
               break;
            case 3:
               getDefinitionByName("com.robot.app2.control.DialogControl").showAllDilogs(177,parseInt(this.showDialogStr.split("_")[0])).then(function(param1:int):void
               {
                  var _loc2_:Array = null;
                  if(param1 == 1)
                  {
                     _loc2_ = showParsStr.split("_");
                     ModuleManager.showAppModule("BiSuoKongJianGameEnterPanel",_loc2_);
                  }
               });
               break;
            case 4:
         }
      }
      
      public function destroy() : void
      {
         this.removeEvent();
         var _loc1_:int = 0;
         while(_loc1_ < 3)
         {
            if(this.map.conLevel["npc_" + _loc1_])
            {
               this.map.conLevel["npc_" + _loc1_].removeEventListener(MouseEvent.CLICK,this.npcClickHandle);
            }
            if(this.map.conLevel["room_" + _loc1_])
            {
               this.map.conLevel["room_" + _loc1_].removeEventListener(MouseEvent.CLICK,this.roomClickHandle);
            }
            _loc1_++;
         }
         this.map.topLevel.removeEventListener(MouseEvent.CLICK,this.btnClickHandle);
         SocketConnection.removeCmdListener(45908,this.mapOverHandle);
         EventManager.removeEventListener("bisuo_room_update",this.eventHandle);
         EventManager.removeEventListener("bisuo_game_over",this.bGamePanelClose);
         this.map = null;
         MapNamePanel.show();
         LeftToolBarManager.showBar();
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
      }
   }
}

package com.robot.app.mapProcess.control
{
   import com.robot.app.ogre.OgreController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.SysTimeEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.manager.map.config.MapProcessConfig;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class RarePetPartyController
   {
      
      public static const DAY_HOUR_MAP:Array = [[[1293,726,1,522,356],[1283,741,0,0,0],[1074,736,2,599,261],[1100,748,1,524,261],[1248,775,0,0,0],[1235,29,2,487,366],[986,105,1,519,268],[499,463,0,0,0],[1291,328,2,333,364],[769,435,1,302,310]],[[499,29,0,0,0],[769,105,2,337,309],[1291,463,1,567,273],[161,328,0,0,0],[986,435,2,345,378],[1235,437,1,569,263],[1248,481,0,0,0],[1293,717,2,84,230],[1283,726,1,525,363],[1100,741,0,0,0]],[[1100,736,2,599,261],[1283,748,1,521,261],[1293,775,0,0,0],[1248,29,2,514,344],[1235,105,1,684,103],[986,463,0,0,0],[161,328,2,326,358],[1291,435,1,251,304],[769,437,0,0,0],[499,481,2,448,397]],[[1293,717,1,837,364],[1283,726,0,0,0],[1100,741,2,343,307],[1248,736,1,566,281],[1235,748,0,0,0],[986,775,2,483,370],[499,29,1,516,277],[1291,105,0,0,0],[769,463,2,584,347],[161,328,1,572,275]],[[161,435,2,345,378],[986,437,1,572,280],[1235,481,0,0,0],[1248,717,2,625,382],[1293,726,1,517,346],[1283,741,0,0,0],[499,736,2,599,261],[769,748,1,521,261],[1100,775,0,0,0],[1291,29,2,514,344]],[[1235,105,1,569,277],[1076,463,0,0,0],[986,328,2,330,360],[499,435,1,444,358],[1291,437,0,0,0],[769,481,2,305,309],[1293,717,1,833,351],[1283,726,0,0,0],[1100,741,2,342,311],[1248,736,1,569,281]],[[1248,748,0,0,0],[1235,775,2,486,370],[986,29,1,522,272],[941,105,0,0,0],[499,463,2,584,347],[1291,328,1,239,268],[769,435,0,0,0],[161,437,2,334,359],[1283,481,1,408,298],[1100,717,0,0,0]]];
      
      private static const MAP_ID:Array = [29,105,463,328,435,437,481,717,726,741,736,748,775];
      
      private static var _npcId:HashMap;
      
      private static var _url:String = "";
      
      private static var _pet:MovieClip;
      
      private static var _map:BaseMapProcess;
      
      private static var _randResult:uint;
      
      private static var _hitCnt:uint = 0;
       
      
      public function RarePetPartyController()
      {
         super();
      }
      
      public static function initNews(param1:BaseMapProcess) : void
      {
         _map = param1;
         if(BufferRecordManager.getState(MainManager.actorInfo,435))
         {
            if(_map.topLevel["newsMC"])
            {
               DisplayUtil.stopAllMovieClip(_map.topLevel["newsMC"]);
            }
         }
         _map.btnLevel["newsBtn"].buttonMode = true;
         _map.btnLevel["newsBtn"].addEventListener(MouseEvent.CLICK,onNewsClick);
      }
      
      private static function onNewsClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.send(1022,86051888);
         if(!BufferRecordManager.getState(MainManager.actorInfo,435))
         {
            BufferRecordManager.setState(MainManager.actorInfo,435,true,function():void
            {
               if(_map.topLevel["newsMC"])
               {
                  DisplayUtil.stopAllMovieClip(_map.topLevel["newsMC"]);
               }
            });
         }
         NpcDialog.show(NPC.NEWS_MAN,["我是飞船主播纽斯，想知道最近宇宙中都发生哪些大事吗？那你可一定要问问我哦！最近稀有精灵好像都纷纷失踪了！"],["稀有精灵失踪之谜！"],[function():void
         {
            SocketConnection.send(1022,86051889);
            ModuleManager.showModule(ClientConfig.getFestivalModule("HalloWeenRarePetLostPuzzleTimePanel"));
         }]);
      }
      
      private static function onExPanel(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86048817);
         ModuleManager.showModule(ClientConfig.getFestivalModule("RarePetPartyExPanel"),"正在打开……");
      }
      
      private static function onTimePanel(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getFestivalModule("RarePetPartyTimePanel"),"正在打开……");
      }
      
      public static function setup() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapSwitchComplete);
      }
      
      private static function onMapSwitchComplete(param1:MapEvent) : void
      {
         if(SystemTimerManager.sysDate.date > 16 || SystemTimerManager.sysDate.hoursUTC > 21 - 8)
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapSwitchComplete);
            return;
         }
         if(MAP_ID.indexOf(MapManager.currentMap.id) != -1)
         {
            switch(MapManager.currentMap.id)
            {
               case 29:
                  SocketConnection.send(1022,86051891);
                  break;
               case 105:
                  SocketConnection.send(1022,86051892);
                  break;
               case 463:
                  SocketConnection.send(1022,86051893);
                  break;
               case 328:
                  SocketConnection.send(1022,86051894);
                  break;
               case 435:
                  SocketConnection.send(1022,86051895);
                  break;
               case 437:
                  SocketConnection.send(1022,86051896);
                  break;
               case 481:
                  SocketConnection.send(1022,86051897);
                  break;
               case 717:
                  SocketConnection.send(1022,86051898);
                  break;
               case 726:
                  SocketConnection.send(1022,86051899);
                  break;
               case 741:
                  SocketConnection.send(1022,86051900);
                  break;
               case 736:
                  SocketConnection.send(1022,86051901);
                  break;
               case 748:
                  SocketConnection.send(1022,86051902);
                  break;
               case 775:
                  SocketConnection.send(1022,86051903);
            }
            init(MapProcessConfig.currentProcessInstance);
         }
      }
      
      private static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
         var _loc2_:uint = uint(SystemTimerManager.sysDate.date);
         var _loc3_:uint = uint(SystemTimerManager.sysDate.month);
         var _loc4_:uint = uint(SystemTimerManager.sysDate.hours);
         var _loc5_:uint = uint(SystemTimerManager.sysDate.minutes);
         if(_loc3_ == 10 && _loc2_ <= 16 && _loc4_ >= 12 && _loc4_ <= 21 && _loc5_ < 5)
         {
            initActive();
         }
         else
         {
            destroy();
         }
      }
      
      private static function initActive() : void
      {
         var _loc1_:uint = uint(SystemTimerManager.sysDate.day);
         var _loc2_:uint = uint(SystemTimerManager.sysDate.hours);
         var _loc3_:uint = uint(DAY_HOUR_MAP[_loc1_][_loc2_ - 12][1]);
         if(MapManager.currentMap.id == _loc3_)
         {
            if(_npcId == null)
            {
               _npcId = new HashMap();
               _npcId.add(499,NPC.ALING);
               _npcId.add(769,NPC.BENZHU);
               _npcId.add(1291,NPC.TUTU);
               _npcId.add(161,NPC.MILU);
               _npcId.add(986,NPC.DISA);
               _npcId.add(1235,NPC.XIAOLANG);
               _npcId.add(1248,NPC.SHANGUANGGUODONGYA);
               _npcId.add(1293,NPC.KEDU);
               _npcId.add(1283,NPC.XIAOKU);
               _npcId.add(1100,NPC.AKAI);
               _npcId.add(941,NPC.WEIKE);
               _npcId.add(1074,NPC.JIELEI);
            }
            SocketConnection.addCmdListener(CommandID.RAREPET_GET_STATUS,onGetStatus);
            SocketConnection.send(CommandID.RAREPET_GET_STATUS);
         }
         else
         {
            destroy();
         }
      }
      
      private static function onGetStatus(param1:SocketEvent) : void
      {
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         SocketConnection.removeCmdListener(CommandID.RAREPET_GET_STATUS,onGetStatus);
         var _loc2_:uint = (param1.data as ByteArray).readUnsignedInt();
         if(Boolean(_loc2_) && SystemTimerManager.sysDate.minutesUTC < 5)
         {
            _loc3_ = uint(SystemTimerManager.sysDate.dayUTC);
            _loc4_ = SystemTimerManager.sysDate.hoursUTC - 4;
            initPet(DAY_HOUR_MAP[_loc3_][_loc4_]);
            EventManager.addEventListener(SysTimeEvent.RECEIVE_SYSTEM_TIME,onSysTime);
         }
         else
         {
            destroy();
         }
      }
      
      private static function initPet(param1:Array) : void
      {
         var arr:Array = param1;
         _hitCnt = 0;
         switch(arr[2])
         {
            case 0:
               _url = ClientConfig.getResPath("active/rarePet/halloWeen/pet_" + arr[0] + "_" + arr[1] + "_" + arr[2] + ".swf");
               ResourceManager.getResource(_url,function(param1:DisplayObject):void
               {
                  var o:DisplayObject = param1;
                  _url = "";
                  _pet = o as MovieClip;
                  _map.conLevel.addChild(_pet);
                  _pet.x = uint(arr[3]);
                  _pet.y = uint(arr[4]);
                  AnimateManager.playMcAnimate(_pet,1,"mc",function():void
                  {
                     NpcDialog.show(NPC.ZABING,["什么？你小子居然可以跟到这里？看来是我小看你了！！！"],["把我的朋友还给我！"],[function():void
                     {
                        NpcDialog.show(NPC.ZABING,["哈哈哈，真是笑话，天上会掉馅饼吗？你还是自己找吧！我还要去其他地方完成任务呢！"],["可恶的家伙，我自己找！"],[function():void
                        {
                           AnimateManager.playMcAnimate(_pet,2,"mc",function():void
                           {
                              _pet.gotoAndStop(3);
                              _pet.buttonMode = true;
                              _pet.addEventListener(MouseEvent.CLICK,onPet_0);
                           });
                        }]);
                     }]);
                  });
               });
               break;
            case 1:
               _url = ClientConfig.getResPath("active/rarePet/halloWeen/pet_" + arr[0] + "_" + arr[1] + "_" + arr[2] + ".swf");
               ResourceManager.getResource(_url,function(param1:DisplayObject):void
               {
                  _url = "";
                  _pet = param1 as MovieClip;
                  _map.conLevel.addChild(_pet);
                  _pet.x = uint(arr[3]);
                  _pet.y = uint(arr[4]);
                  _pet.buttonMode = true;
                  _pet.visible = true;
                  _pet.gotoAndStop(1);
                  _pet.addEventListener(MouseEvent.CLICK,onPet_1);
               });
               break;
            case 2:
               _url = ClientConfig.getResPath("active/rarePet/halloWeen/pet_" + arr[0] + "_" + arr[1] + "_" + arr[2] + ".swf");
               _randResult = uint(Math.floor(Math.random() * 3) + 1);
               ResourceManager.getResource(_url,function(param1:DisplayObject):void
               {
                  var sPet_1:MovieClip = null;
                  var o1:DisplayObject = param1;
                  sPet_1 = o1 as MovieClip;
                  sPet_1.name = "pet_1";
                  _map.conLevel.addChild(sPet_1);
                  sPet_1.x = uint(arr[3]);
                  sPet_1.y = uint(arr[4]);
                  sPet_1.buttonMode = true;
                  sPet_1.addEventListener(MouseEvent.CLICK,onPet_2);
                  ResourceManager.getResource(_url,function(param1:DisplayObject):void
                  {
                     var o2:DisplayObject = param1;
                     var sPet_2:MovieClip = o2 as MovieClip;
                     sPet_2.name = "pet_2";
                     _map.conLevel.addChild(sPet_2);
                     sPet_2.x = uint(arr[3] + 87);
                     sPet_2.y = uint(arr[4] + 5);
                     sPet_2.buttonMode = true;
                     sPet_2.addEventListener(MouseEvent.CLICK,onPet_2);
                     ResourceManager.getResource(_url,function(param1:DisplayObject):void
                     {
                        var _loc2_:MovieClip = param1 as MovieClip;
                        _loc2_.name = "pet_3";
                        _map.conLevel.addChild(_loc2_);
                        _loc2_.x = uint(arr[3] + 57);
                        _loc2_.y = uint(arr[4] + 74);
                        _loc2_.buttonMode = true;
                        _loc2_.addEventListener(MouseEvent.CLICK,onPet_2);
                        NpcDialog.show(_npcId.getValue(arr[0]),["是赛尔吗？快帮帮我，也不知道是谁把我变成了这个模样，我讨厌现在的自己！！"],["别害怕...我现在就救你出来！"]);
                     });
                  });
               });
         }
      }
      
      private static function onPet_0(param1:MouseEvent) : void
      {
         ++_hitCnt;
         if(_hitCnt < 2)
         {
            AnimateManager.playMcAnimate(_pet,3,"mc");
         }
         else
         {
            _pet.removeEventListener(MouseEvent.CLICK,onPet_0);
            SocketConnection.send(CommandID.RAREPET_FIGHT);
            DisplayUtil.removeForParent(_pet);
         }
      }
      
      private static function onPet_1(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         ++_hitCnt;
         if(_hitCnt < 3)
         {
            AnimateManager.playMcAnimate(_pet,_hitCnt,"mc");
         }
         else if(_hitCnt == 3)
         {
            AnimateManager.playMcAnimate(_pet,_hitCnt,"mc",function():void
            {
               var arr:Array = _pet.name.split("_");
               var day:uint = uint(SystemTimerManager.sysDate.dayUTC);
               var hour:uint = SystemTimerManager.sysDate.hoursUTC - 4;
               NpcDialog.show(_npcId.getValue(DAY_HOUR_MAP[day][hour][0]),["这是什么地方，我怎么会在这里啊！怎么我什么都不记得了，谁能帮帮我啊！"],["别担心，我这就带你回去！"],[function():void
               {
                  _pet.removeEventListener(MouseEvent.CLICK,onPet_1);
                  SocketConnection.send(CommandID.RAREPET_FIGHT);
                  DisplayUtil.removeForParent(_pet);
               }]);
            });
         }
      }
      
      private static function onPet_2(param1:MouseEvent) : void
      {
         var obj:MovieClip = null;
         var e:MouseEvent = param1;
         obj = e.currentTarget as MovieClip;
         var index:uint = uint(obj.name.split("_")[1]);
         if(index != _randResult)
         {
            AnimateManager.playMcAnimate(obj,3,"mc",function():void
            {
               obj.removeEventListener(MouseEvent.CLICK,onPet_2);
               DisplayUtil.removeForParent(obj);
            });
         }
         else
         {
            AnimateManager.playMcAnimate(obj,2,"mc",function():void
            {
               obj.removeEventListener(MouseEvent.CLICK,onPet_2);
               SocketConnection.send(CommandID.RAREPET_FIGHT);
               DisplayUtil.removeForParent(obj);
            });
         }
      }
      
      private static function onSysTime(param1:SysTimeEvent) : void
      {
         if(SystemTimerManager.sysDate.minutesUTC >= 5)
         {
            destroy();
         }
      }
      
      public static function destroy() : void
      {
         OgreController.isShow = true;
         MainManager.selfVisible = true;
         if(SystemTimerManager.sysDate.dateUTC > 16 || SystemTimerManager.sysDate.hoursUTC > 21 - 8)
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapSwitchComplete);
         }
         SocketConnection.removeCmdListener(CommandID.RAREPET_GET_STATUS,onGetStatus);
         EventManager.removeEventListener(SysTimeEvent.RECEIVE_SYSTEM_TIME,onSysTime);
         if(_map)
         {
            if(MapManager.currentMap.id == 1)
            {
               _map.btnLevel["newsBtn"].removeEventListener(MouseEvent.CLICK,onNewsClick);
            }
            else
            {
               if(_url != "")
               {
                  ResourceManager.cancelURL(_url);
                  _url = "";
               }
               if(_pet)
               {
                  _pet.removeEventListener(MouseEvent.CLICK,onPet_0);
                  _pet.removeEventListener(MouseEvent.CLICK,onPet_1);
                  _pet.removeEventListener(MouseEvent.CLICK,onPet_2);
                  DisplayUtil.removeForParent(_pet);
               }
               _pet = null;
            }
            _map = null;
         }
      }
   }
}

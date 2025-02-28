package com.robot.app.mapProcess.control
{
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.GetPetController;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.clearInterval;
   import flash.utils.setInterval;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.BitUtil;
   import org.taomee.utils.DisplayUtil;
   
   public class RescueZuoMeiSiController
   {
      
      private static const TIME_STR:Object = {
         "startDay":"2016.4.1",
         "endDay":"2016.4.7",
         "activeTime":"18:00-20:00"
      };
      
      private static const TIME_TEXT:String = "活动时间：4月1日-4月7日 18:00-20:00";
      
      private static var _map:BaseMapProcess;
      
      private static var _num:uint;
      
      private static var _mapArray:Array = [30,20,105,47,40,54,51,57,60,328,333,338,688,699,424,429,435,437,439,441,459,481,484,494,497,683,19,29,726,736];
      
      private static var _timer:uint;
      
      private static var _points:Array = [[520,356],[569,384],[362,329],[445,435],[281,342],[602,429],[350,320],[574,372],[532,213],[295,453],[526,379],[728,397],[408,257],[550,344],[301,373],[177,224],[385,441],[621,442],[196,405],[640,427],[176,375],[488,272],[376,376],[320,345],[378,470],[644,308],[300,372],[545,432],[570,440],[490,337]];
       
      
      public function RescueZuoMeiSiController()
      {
         super();
      }
      
      private static function get taskMC() : MovieClip
      {
         if(Boolean(_map) && Boolean(_map.conLevel["taskmc"]))
         {
            return _map.conLevel["taskmc"];
         }
         return null;
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         taskMC.visible = isInActiveDay;
         taskMC.buttonMode = true;
         MapListenerManager.add(taskMC,onClick);
         MapListenerManager.add(_map.conLevel["intro"],onShowPanel);
         if(_num == 6)
         {
            MainManager.selfVisible = false;
            AnimateManager.playMcAnimate(taskMC,9,"mc",function():void
            {
               NpcDialog.show(NPC.ZUOMEISI,["赛尔，谢谢你救了我。可是我还有那么多伙伴被困在里面，你一定要把它们都救出来啊！"],["恩恩，放心。"],[function():void
               {
                  NpcDialog.show(NPC.YIYOU,["火势实在是太大了，我们必须回去重整装备。事情紧急，刻不容缓。赛尔，麻烦你去找另一批救火队员过来吧。"],["放心，我这就去。"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,10,"mc",function():void
                     {
                        setCommand();
                     });
                  }]);
               }]);
            });
         }
         else if(_num > 0 && _num < 6)
         {
            AnimateManager.playMcAnimate(taskMC,3 + _num,"mc",function():void
            {
               clearInterval(_timer);
               _timer = setInterval(function():void
               {
                  if(taskMC)
                  {
                     AnimateManager.playMcAnimate(taskMC,3 + _num,"mc",null,false,false);
                  }
               },30000);
            },false,false);
         }
         else
         {
            AnimateManager.playMcAnimate(taskMC,Math.floor(Math.random() * 2 + 1),"mc",null,false,false);
         }
      }
      
      private static function setCommand() : void
      {
         SocketConnection.addCmdListener(CommandID.RESCUE_ZMS,function(param1:SocketEvent):void
         {
            var _loc3_:ByteArray = param1.data as ByteArray;
            SocketConnection.removeCmdListener(CommandID.RESCUE_ZMS,arguments.callee);
            _num = 0;
            MainManager.selfVisible = true;
            _loc3_.position = 0;
            var _loc4_:int = int(_loc3_.readUnsignedInt());
            var _loc5_:int = int(_loc3_.readUnsignedInt());
            GetPetController.getPet(_loc4_,_loc5_);
         });
         SocketConnection.send(CommandID.RESCUE_ZMS);
      }
      
      private static function onShowPanel(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("RescueZMSPanel"),"正在加载...",[_num,TIME_TEXT]);
      }
      
      private static function onNpcClick(param1:MouseEvent) : void
      {
         var npc:MovieClip = null;
         var e:MouseEvent = param1;
         npc = e.currentTarget as MovieClip;
         SocketConnection.addCmdListener(CommandID.RESCUE_ZMS_GET_YIYOU,function(param1:SocketEvent):void
         {
            var data:ByteArray;
            var num:uint;
            var e:SocketEvent = param1;
            SocketConnection.removeCmdListener(CommandID.RESCUE_ZMS_GET_YIYOU,arguments.callee);
            data = e.data as ByteArray;
            if(data == null)
            {
               return;
            }
            num = data.readUnsignedInt();
            if(num == 1)
            {
               ++_num;
               if(_num == 6)
               {
                  NpcDialog.show(NPC.YIYOU,["哪里十万火急，我们精灵救火队就会在第一时间赶到那里！"],["不好了，有精灵被恶灵深渊的大火困住了！"],[function():void
                  {
                     NpcDialog.show(NPC.YIYOU,["我已经知道这个消息了，赛尔，快带我去恶灵深渊。"],["好的，我这就带你去恶灵深渊。","我不记得通知多少救火员了…"],[function():void
                     {
                        MapManager.changeMap(784);
                     },function():void
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("RescueZMSPanel"),"正在加载...",[_num,TIME_TEXT]);
                     }]);
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.YIYOU,["哪里十万火急，我们精灵救火队就会在第一时间赶到那里！"],["不好了，有精灵被恶灵深渊的大火困住了！","我走错地方了…"],[function():void
                  {
                     NpcDialog.show(NPC.YIYOU,["好的，我马上就去！"],["那就拜托你了。","我不记得通知多少救火员了…  "],[function():void
                     {
                        AnimateManager.playMcAnimate(npc,1,"mc",function():void
                        {
                           npc.visible = false;
                        });
                     },function():void
                     {
                        npc.visible = false;
                        ModuleManager.showModule(ClientConfig.getAppModule("RescueZMSPanel"),"正在加载...",[_num,TIME_TEXT]);
                     }]);
                  },function():void
                  {
                     npc.visible = false;
                  }]);
               }
            }
            else if(num == 2)
            {
               AnimateManager.playMcAnimate(npc,2,"mc",function():void
               {
                  NpcDialog.show(NPC.PIRATE_2,["哈哈，被我骗了吧~想要找到救火员，哪有这么容易？宇宙海盗，神通广大，灭哈哈哈哈~"],["海盗又到处捣乱，看我不教训教训你！"],[function():void
                  {
                     FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
                     {
                        FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                        NpcDialog.show(NPC.SEER,["我要尽快找到6个救火队员，不然可怜的佐梅斯就真的要变成爆米花了。"],["（快去其他星球搜寻救火队的身影吧。） "]);
                     });
                     SocketConnection.send(CommandID.FIGHT_BOSS_PIRATE,0);
                  }]);
               });
            }
         });
         SocketConnection.send(CommandID.RESCUE_ZMS_GET_YIYOU);
      }
      
      private static function onNPCLoad(param1:DisplayObject) : void
      {
         var _loc2_:MovieClip = param1 as MovieClip;
         var _loc3_:uint = uint(_mapArray.indexOf(MapManager.currentMap.id));
         _loc2_.x = _points[_loc3_][0];
         _loc2_.y = _points[_loc3_][1];
         MapManager.currentMap.controlLevel.addChild(_loc2_);
         MapListenerManager.add(_loc2_,onNpcClick);
      }
      
      public static function setup() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            var mapId:uint = 0;
            var e:MapEvent = param1;
            if(isInActive)
            {
               mapId = uint(MapManager.currentMap.id);
               if(_mapArray.indexOf(mapId) != -1)
               {
                  SocketConnection.addCmdListener(CommandID.RESCUE_ZMS_INIT_YIYOU,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(CommandID.RESCUE_ZMS_INIT_YIYOU,arguments.callee);
                     var _loc3_:ByteArray = param1.data as ByteArray;
                     var _loc4_:uint = _loc3_.readUnsignedInt();
                     var _loc5_:uint = uint(_mapArray.indexOf(mapId));
                     if(BitUtil.getBit(_loc4_,_loc5_) == 0)
                     {
                        ResourceManager.getResource(ClientConfig.getNpcSwfPath("yiyou"),onNPCLoad);
                     }
                  });
                  SocketConnection.send(CommandID.RESCUE_ZMS_INIT_YIYOU);
               }
            }
         });
         MapManager.addEventListener(MapEvent.MAP_DESTROY,function(param1:MapEvent):void
         {
            ResourceManager.cancel(ClientConfig.getNpcSwfPath("yiyou"),onNPCLoad);
         });
         SocketConnection.addCmdListener(CommandID.RESCUE_ZMS_GET_YIYOU_NUM,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.RESCUE_ZMS_GET_YIYOU_NUM,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            _num = _loc3_.readUnsignedInt();
         });
         SocketConnection.send(CommandID.RESCUE_ZMS_GET_YIYOU_NUM);
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(_num != 0)
         {
            NpcDialog.show(NPC.YIYOU,["火势太猛了，我们需要更多的支援！赛尔，拜托你去找更多的救火队员过来！"],["我这就去。"," 我该去哪里找它们呢？"],[null,function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("RescueZMSPanel"),"正在加载...",[_num,TIME_TEXT]);
            }]);
         }
         else if(isInActive)
         {
            NpcDialog.show(NPC.ZUOMEISI,["赛尔，你找到精灵救火队了吗？赶快去各大星球，帮我们找到它们。我们快要变成爆米花了，呜呜呜。"],["我这就去。","我该去哪里找它们呢？"],[null,function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("RescueZMSPanel"),"正在加载...",[_num,TIME_TEXT]);
            }]);
         }
         else
         {
            NpcDialog.show(NPC.ZUOMEISI,["终于有人来了…呜呜呜，快救救我…我们不小心被困在这里了，这里好烫，我们快被烧死了…呜呜呜…我们不要变成爆米花！"],["别害怕，我该怎么救你们呢？"],[function():void
            {
               NpcDialog.show(NPC.ZUOMEISI,["只要找到精灵救火队，帮我们把周围的火灭掉，我就能得救了。"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.ZUOMEISI,["每天的" + TIME_STR.activeTime + "，救火队队员就会出现在各个星球。如果你找到它们，一定要让它们来这里，帮我们把火灭掉。"],["恩恩，放心，我一定会通知救火队的。"],[function():void
                  {
                     SocketConnection.send(1022,86051024);
                  }]);
               });
            }]);
         }
      }
      
      private static function get isInActive() : Boolean
      {
         if(isInActiveDay && isInActiveTime)
         {
            return true;
         }
         return false;
      }
      
      private static function get isInActiveDay() : Boolean
      {
         var _loc1_:int = int(SystemTimerManager.time);
         var _loc2_:Object = getDateObj(TIME_STR.startDay);
         var _loc3_:int = int(SystemTimerManager.getTimeByDate(_loc2_.year,_loc2_.month,_loc2_.day,0));
         var _loc4_:Object = getDateObj(TIME_STR.endDay);
         var _loc5_:int = int(SystemTimerManager.getTimeByDate(_loc4_.year,_loc4_.month,_loc4_.day,23,59,59));
         if(_loc1_ >= _loc3_ && _loc1_ <= _loc5_)
         {
            return true;
         }
         return false;
      }
      
      private static function get isInActiveTime() : Boolean
      {
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         var _loc2_:int = int(SystemTimerManager.time);
         var _loc3_:Object = getTimeObj(TIME_STR.activeTime);
         var _loc4_:int = int(SystemTimerManager.getTimeByDate(_loc1_.fullYear,_loc1_.month + 1,_loc1_.date,_loc3_.start.hour,_loc3_.start.minute));
         var _loc5_:int = int(SystemTimerManager.getTimeByDate(_loc1_.fullYear,_loc1_.month + 1,_loc1_.date,_loc3_.end.hour,_loc3_.end.minute));
         if(_loc2_ >= _loc4_ && _loc2_ <= _loc5_)
         {
            return true;
         }
         return false;
      }
      
      private static function getDateObj(param1:String) : Object
      {
         var _loc2_:Array = param1.split(".");
         if(_loc2_.length != 3)
         {
            throw new Error("时间配置错了！");
         }
         return {
            "year":int(_loc2_[0]),
            "month":int(_loc2_[1]),
            "day":int(_loc2_[2])
         };
      }
      
      private static function getTimeObj(param1:String) : Object
      {
         var _loc2_:Array = param1.split("-");
         if(_loc2_.length != 2)
         {
            throw new Error("时间配置错了！");
         }
         var _loc3_:Array = _loc2_[0].split(":");
         var _loc4_:Array = _loc2_[1].split(":");
         return {
            "start":{
               "hour":int(_loc3_[0]),
               "minute":int(_loc3_[1])
            },
            "end":{
               "hour":int(_loc4_[0]),
               "minute":int(_loc4_[1])
            }
         };
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            DisplayUtil.removeForParent(taskMC);
            _map = null;
         }
         clearInterval(_timer);
      }
   }
}

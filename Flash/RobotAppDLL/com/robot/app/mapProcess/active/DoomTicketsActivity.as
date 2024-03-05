package com.robot.app.mapProcess.active
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.superParty.SPConfig;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.DialogUtil;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.core.CommandID;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.PetInBagAlert;
   import com.robot.core.ui.alert.PetInStorageAlert;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.utils.DisplayUtil;
   
   public class DoomTicketsActivity
   {
      
      private static var TASK_ID:int = 1308;
      
      private static var _dengNum:int;
      
      private static var _hasFinish2:Boolean;
       
      
      public function DoomTicketsActivity()
      {
         super();
      }
      
      public static function setUp() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
         AimatController.addEventListener(AimatEvent.PLAY_END,onTicketEnd);
      }
      
      private static function onTicketEnd(param1:AimatEvent) : void
      {
         var allOgre:Array;
         var point:Point;
         var ogre:OgreModel = null;
         var event:AimatEvent = param1;
         if(event.info.id != 600056)
         {
            return;
         }
         if(SPConfig.allIdA.length == 0)
         {
            SPConfig.makeInfo();
         }
         if(SPConfig.allIdA.indexOf(MapManager.currentMap.id) != -1)
         {
            Alarm.show("超时空通道暂时不会遭受恶灵兽和纳斯琪的毒手，赶快去通知其他精灵吧!");
            return;
         }
         if(null == OgreController.ogreList)
         {
            return;
         }
         allOgre = OgreController.ogreList.getValues();
         point = event.info.endPos;
         for each(ogre in allOgre)
         {
            if(ogre.hitTestPoint(point.x,point.y))
            {
               SocketConnection.addCmdListener(CommandID.DOOM_TICKET_SHOOT_OGRE,function(param1:*):void
               {
                  var _loc5_:uint = 0;
                  SocketConnection.removeCmdListener(CommandID.DOOM_TICKET_SHOOT_OGRE,arguments.callee);
                  var _loc3_:ByteArray = param1.data as ByteArray;
                  _loc3_.position = 0;
                  var _loc4_:int;
                  if((_loc4_ = int(_loc3_.readUnsignedInt())) != 0)
                  {
                     _loc5_ = _loc3_.readUnsignedInt();
                  }
                  if(_loc4_ != 0)
                  {
                     if(PetManager.length < 6)
                     {
                        PetManager.storageToInBag(_loc5_);
                        PetInBagAlert.show(_loc4_,PetXMLInfo.getName(_loc4_) + "已经放入了你的精灵背包！");
                     }
                     else
                     {
                        PetInStorageAlert.show(_loc4_,PetXMLInfo.getName(_loc4_) + "已经放入了你的精灵仓库！");
                     }
                  }
               });
               SocketConnection.send(CommandID.DOOM_TICKET_SHOOT_OGRE,ogre.id);
               return;
            }
         }
      }
      
      private static function onMapChange(param1:* = null) : void
      {
         _dengNum = 0;
         if(null == MapManager.currentMap)
         {
            return;
         }
         if(MapManager.currentMap.id == 414)
         {
            initMap414();
         }
         if(MapManager.currentMap.id == 804)
         {
            initMap804();
         }
         if(MapManager.currentMap.id == MainManager.actorInfo.userID)
         {
            enterXiaowu();
         }
      }
      
      private static function enterXiaowu() : void
      {
         var d:Array = null;
         if(!hasFinshPreTask)
         {
            if(true == BufferRecordManager.getState(MainManager.actorInfo,486))
            {
               return;
            }
            BufferRecordManager.setState(MainManager.actorInfo,486,true);
            d = [[NPC.SUPERNONO,["主人主人~~贾斯汀站长有重要通知，让所有赛尔速速赶往比格星，主人我们是不是应该马上赶过去？"],["贾斯汀站长？一定有大事发生！我们快走！","嗯，我现在很忙，明天再说。"]]];
            DialogUtil.playDilogs(d,[function():void
            {
               MapManager.changeMap(804);
               SocketConnection.send(1022,86052865);
            }]);
         }
      }
      
      private static function initMap804() : void
      {
         mapMv.gotoAndStop(mapMv.totalFrames);
         if(!hasFinshPreTask)
         {
            return;
         }
         if(hasFinishDayPreTask2())
         {
            if(hasFinishDayPreTask2())
            {
               mapMv.gotoAndStop(mapMv.totalFrames);
               KTool.getLimitNum(10077,function(param1:int):void
               {
                  if(param1 == 0)
                  {
                     _hasFinish2 = false;
                  }
                  else
                  {
                     _hasFinish2 = true;
                  }
                  addDengEvent();
               });
            }
            else
            {
               playDailyTask2Pre();
            }
         }
         else
         {
            MapListenerManager.add(mapMv,function(param1:*):void
            {
               var _loc2_:DisplayObject = mapMv;
               MapListenerManager.remove(mapMv,false);
               MapManager.currentMap.controlLevel.addChild(_loc2_);
               playDailyTask2Pre();
            },"寻找西莫尔");
         }
      }
      
      private static function initMap414() : void
      {
         MapListenerManager.add(MapManager.currentMap.depthLevel["doomBtn"],function(param1:*):void
         {
            var e:* = param1;
            SocketConnection.send(1022,86052866);
            ModuleManager.showModule(ClientConfig.getAppModule("DoomTicketsPanel"));
            if(hasFinshPreTask)
            {
               KTool.getLimitNum(10076,function(param1:int):void
               {
                  if(param1 == 0)
                  {
                     finishDailyTask(1);
                  }
               });
            }
         });
         if(hasFinshPreTask)
         {
            if(mapMv)
            {
               DisplayUtil.removeForParent(mapMv);
            }
         }
         else
         {
            TasksManager.accept(TASK_ID);
            playPreTask();
         }
      }
      
      private static function playPreTask() : void
      {
         var taskQuePro:TaskQuneProcessor = null;
         var d1:Array = [[NPC.SUPERNONO,["哇~~~战神盖亚~~~好威武好霸气~~~主人主人有没有哪里能买到盖亚套装？盖亚你能给我签个名吗？"],["咳咳，NoNo，注意礼貌……"]],[NPC.GAIYA,[MainManager.actorInfo.formatNick + "？好久不见。看来赛尔号已经得知比格星遇袭的消息了，这是我的故乡，我不会原谅恶灵兽的行为。"],["太可怕了，地上被砸出那么大一个坑。"]],[NPC.GAIYA,["我要去找恶灵兽算账！摄灵邪阵引起的陨石流，破坏了保护0xff0000暗夜灯河0xFFFFFF的结界，恐怕恶灵兽的爪牙已经入侵那里了。"],["暗夜灯河？"]],[NPC.GAIYA,["那里生活着比格星的0xff0000上古守护精魂西莫尔0xFFFFFF…不好！天马星可能也有通往暗夜灯河的入口！这里就拜托你了，一定要保护好0xff0000西莫尔0xFFFFFF和其他精灵！"],["嗯！盖亚你放心，我一定不辱使命！"]]];
         var d2:Array = [[NPC.SUPERNONO,["主人主人！有贾斯汀站长发来的视频通话！"],null]];
         var d3:Array = [[NPC.SUPERNONO,["主人主人~~我听懂了，我们要把赛尔号船票送到每只精灵手中，让它们知道，只要在12月21日登上赛尔号，就能避开恶灵兽的攻击，安全度过世界末日。对不对呀~~"],["嗯，义不容辞，现在就去发船票！"]]];
         taskQuePro = new TaskQuneProcessor();
         taskQuePro.addDialog(d1);
         taskQuePro.addMapMv(mapMv,2,"mc2");
         taskQuePro.addDialog(d2);
         taskQuePro.addFullMv(ClientConfig.getFullMovie("active20121207_3"));
         taskQuePro.addDialog(d3);
         taskQuePro.procesEndFun = function():void
         {
            MainManager.selfVisible = true;
            finishPreTask();
            taskQuePro.destory();
            DisplayUtil.removeForParent(mapMv);
            ModuleManager.showModule(ClientConfig.getAppModule("DoomTicketsPanel"));
            SocketConnection.send(1022,86052864);
         };
         MainManager.selfVisible = false;
         AnimateManager.playMcAnimate(mapMv,1,"mc1",function():void
         {
            MapListenerManager.add(mapMv,function(param1:*):void
            {
               MapListenerManager.remove(mapMv,false);
               taskQuePro.start();
            });
         });
      }
      
      private static function playDailyTask2Pre() : void
      {
         var taskQuePro:TaskQuneProcessor = null;
         var d1:Array = [[NPC.SUPERNONO,["主人主人，那个小不点难道就是比格星的上古守护精魂？看起来一点都不厉害的样子……"],null]];
         var d2:Array = [[NPC.SEER,["不好意思不好意思，我们家NoNo口无遮拦不懂礼貌。请放手，啊不，请住嘴…"],null]];
         var d3:Array = [[NPC.XIMOER,["你们一定是从盖亚那个0xff0000不成器的小家伙0xFFFFFF那听说我的吧。0xff0000上古守护精魂0xFFFFFF？嗯，这个称号不错~几万年以前，大家只是很随便地叫我0xff0000土地0xFFFFF什么的……"],null],[NPC.SEER,["虽然长得年轻，但老人家就是老人家，真啰嗦…快点跟我们走啦！这里不安全，恶灵兽很快会发现你的存在的！盖亚说，如果0xff0000你不小心被干掉了，比格星会毁灭的！0xFFFFFF"],null],[NPC.XIMOER,["我看上去有这么容易被灭掉吗？你才啰嗦呢！我到现在还不知道你是来干嘛的，不说我回去继续睡觉了。"],["等一下！NoNo，上！"]]];
         var d4:Array = [[NPC.SEER,["...…贾斯汀站长和罗杰船长制定了一个精灵救援计划， 12月21日，当末日降临，0xff0000请登船避难0xFFFFFF。"],null],[NPC.XIMOER,["知道了，不就是船票么，给我吧，我收下了。你们可以走了"],["这么淡定…果然有上古遗风。"]],[NPC.SEER,["那，我就…先走了？记得快点撤离这里，盖亚忙于对抗恶灵兽。它把你的安危托付给我，我不能让它失望的。"],null]];
         var d5:Array = [[NPC.SUPERNONO,["主人主人，你头上不要随便冒冷汗嘛，会生锈的。老人家都是很固执的。NoNo明天再陪你过来，多唠叨几次，它就不会无视我们了。"],["只能这样了…我们明天再来吧。"]]];
         taskQuePro = new TaskQuneProcessor();
         taskQuePro.addMapMv(mapMv,1,"mc1");
         taskQuePro.addDialog(d1);
         taskQuePro.addMapMv(mapMv,2,"mc2");
         taskQuePro.addDialog(d2);
         taskQuePro.addMapMv(mapMv,3,"mc3");
         taskQuePro.addDialog(d3);
         taskQuePro.addFullMv(ClientConfig.getFullMovie("doomticket2"));
         taskQuePro.addDialog(d4);
         taskQuePro.addMapMv(mapMv,4,"mc4");
         taskQuePro.addDialog(d5);
         taskQuePro.procesEndFun = function():void
         {
            finishDailyTask(2);
            taskQuePro.destory();
            BufferRecordManager.setState(MainManager.actorInfo,485,true);
            mapMv.gotoAndStop(mapMv.totalFrames);
            addDengEvent();
            MainManager.selfVisible = true;
         };
         taskQuePro.start();
         MainManager.selfVisible = false;
      }
      
      private static function addDengEvent() : void
      {
         var i:int;
         mapMv.gotoAndStop(mapMv.totalFrames);
         i = 0;
         while(i < 5)
         {
            KTool.getFrameMc(mapMv,mapMv.currentFrame,"d" + (i + 1),function(param1:MovieClip):void
            {
               MapListenerManager.add(param1,onDengClick,"不要点我");
            });
            i++;
         }
      }
      
      private static function playDailyTask2() : void
      {
         var taskQuePro:TaskQuneProcessor = null;
         var d1:Array = [[NPC.SUPERNONO,["你怎么还在睡懒觉啊，快点离开这里啦！你一定要等到恶灵兽杀到家门口了才肯0xff0000登陆赛尔号避难0xFFFFFF吗？快走啦快走啦！"],["NoNo，对老人家不要这么没礼貌。"]]];
         var d2:Array = [[NPC.XIMOER,["你是不是就是昨天来的那个机器人？知道了，不就是0xff0000船票0xFFFFFF吗？给我吧，我收下了。你们可以走了"],[" 盖亚真的很担心你的安危。"]]];
         var d3:Array = [[NPC.SUPERNONO,["主人主人，你头上不要随便冒冷汗嘛，会生锈的。老人家都是很固执的。NoNo明天再陪你过来，多唠叨几次，它就不会无视我们了。"],["只能这样了…我们明天再来吧。"]]];
         taskQuePro = new TaskQuneProcessor();
         taskQuePro.addMapMv(mapMv,5,"mc5");
         taskQuePro.addDialog(d1);
         taskQuePro.addDialog(d2);
         taskQuePro.addMapMv(mapMv,6,"mc6");
         taskQuePro.addDialog(d3);
         taskQuePro.procesEndFun = function():void
         {
            finishDailyTask(2);
            taskQuePro.destory();
            _hasFinish2 = true;
            addDengEvent();
         };
         taskQuePro.start();
      }
      
      private static function onDengClick(param1:MouseEvent) : void
      {
         var _loc3_:Array = null;
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         if(_hasFinish2)
         {
            _loc3_ = [[NPC.SUPERNONO,["老人家都是很固执的。NoNo明天再陪你过来，多唠叨几次，它就不会无视我们了。"],["只能这样了…我们明天再来吧。"]]];
            DialogUtil.playDilogs(_loc3_,null);
         }
         else
         {
            _loc2_.mouseChildren = _loc2_.mouseChildren = false;
            MapListenerManager.remove(_loc2_,false);
            _loc2_.play();
            ++_dengNum;
            if(_dengNum == 5)
            {
               playDailyTask2();
            }
         }
      }
      
      private static function get activityTime() : CronTimeVo
      {
         return new CronTimeVo("*","*","7-20","12","*");
      }
      
      public static function get hasFinshPreTask() : Boolean
      {
         return TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE;
      }
      
      private static function finishPreTask(param1:Function = null) : void
      {
         var _loc2_:CronTimeVo = new CronTimeVo("0","0","11","12","*");
         SocketConnection.send(4189);
      }
      
      private static function get mapMv() : MovieClip
      {
         return MapManager.currentMap.controlLevel["doom_ticket"];
      }
      
      private static function finishDailyTask(param1:int) : void
      {
         if(param1 == 2)
         {
            _hasFinish2 = true;
         }
         SocketConnection.send(CommandID.DOOM_TICKET_FININS_DAILY_TASK,param1);
      }
      
      private static function hasFinishDayPreTask2() : Boolean
      {
         return BufferRecordManager.getState(MainManager.actorInfo,485);
      }
   }
}

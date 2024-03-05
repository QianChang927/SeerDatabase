package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class DarkGodEnvoy_GoldenLionController
   {
      
      private static const PRE_TASK_BUFF:int = 666;
      
      private static const TARGET_MAP:int = 92;
      
      private static var _taskMc:MovieClip;
      
      private static var _inStory:Boolean;
      
      private static var _map:BaseMapProcess;
       
      
      public function DarkGodEnvoy_GoldenLionController()
      {
         super();
      }
      
      public static function initEquip(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         MapListenerManager.add(map.depthLevel["darkGod"],function():void
         {
            SocketConnection.send(1022,86058478);
            checkPreTask();
         },"金狮的锤炼");
      }
      
      private static function checkPreTask() : void
      {
         if(BufferRecordManager.getMyState(PRE_TASK_BUFF))
         {
            MapManager.changeMap(TARGET_MAP);
         }
         else
         {
            NpcDialog.show(NPC.SEER,["我一定弄清暗黑之神的来历，还有天降异象 神兽异动这句话的背后到底蕴藏着怎样的秘密呢！"],["再次前往暗黑圣堂！"],[function():void
            {
               _inStory = true;
               if(MapManager.currentMap.id != TARGET_MAP)
               {
                  MapManager.changeMap(TARGET_MAP);
               }
            }]);
         }
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ResourceManager.getResource(ClientConfig.getAppRes("activeMc/darkGodEnvoy_GoldenLionStory"),function(param1:DisplayObject):void
         {
            _taskMc = param1 as MovieClip;
            MapManager.currentMap.btnLevel.addChild(_taskMc);
            _taskMc.x = 0;
            _taskMc.y = 0;
            if(_inStory)
            {
               _taskMc.buttonMode = true;
               _taskMc.addEventListener(MouseEvent.CLICK,startPreTask);
            }
            else if(BufferRecordManager.getMyState(PRE_TASK_BUFF))
            {
               initNPC();
            }
            else
            {
               DisplayUtil.removeForParent(_taskMc);
            }
         });
      }
      
      private static function initNPC() : void
      {
         _taskMc.addEventListener(Event.FRAME_CONSTRUCTED,function(param1:Event):void
         {
            var e:Event = param1;
            if(_taskMc.currentFrame != 3)
            {
               return;
            }
            _taskMc.removeEventListener(Event.FRAME_CONSTRUCTED,arguments.callee);
            MapListenerManager.add(_taskMc["lion"],function():void
            {
               SocketConnection.send(1022,86058475);
               NpcDialog.show(NPC.JINSHI,["我会帮助你提升自己的终极实力，在这里你将体验和白鹰截然不同的锤炼，加油吧！"],["挑战四大神使—金狮！","让我在准备一下！"],[function():void
               {
                  SocketConnection.send(1022,86058476);
                  ModuleManager.showModule(ClientConfig.getAppModule("darkGodEnvoy/DarkGodEnvoy_GoldenLionMainPanel"));
               },function():void
               {
                  SocketConnection.send(1022,86058477);
               }]);
            },"金狮的锤炼");
            MapListenerManager.add(_taskMc["hawk"],function():void
            {
               SocketConnection.send(1022,86058267);
               NpcDialog.show(NPC.BAIYING,["哼哼…小子让我看看你的实力是不是和你所说的一样强大！"],["挑战四大神使—白鹰！","让我再准备一下！"],[function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("darkGodEnvoy/DarkGodEnvoy_WhiteHawkMainPanel"));
               }]);
            },"白鹰四重挑战");
         });
         _taskMc.gotoAndStop(3);
      }
      
      private static function startPreTask(param1:MouseEvent) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var e:MouseEvent = param1;
         SocketConnection.send(1022,86058473);
         _taskMc.removeEventListener(MouseEvent.CLICK,startPreTask);
         KTool.hideMapAllPlayerAndMonster();
         story = [[TaskStoryPlayer.DIALOG,[NPC.BAIYING,[MainManager.actorInfo.formatNick + "你终于回来了，怎么样还没有找到战胜我的方法吗？如果是真的，那你根本不配获得暗黑之神的眷顾！"],["谁说的！我一定可以的！"]]],[TaskStoryPlayer.DIALOG,[NPC.BAIYING,["那就用你最强大的实力来挑战我吧！如果你连我这关都过不了，你如何战胜其他三位神使呢！"],["别小看我，毕竟我还是很强的！"]]],[TaskStoryPlayer.CARTOON,["cartoon/darkGodEnvoy_GoldenLion_1"]],[TaskStoryPlayer.DIALOG,[NPC.JINSHI,["白鹰！省省力气吧！你的这套方法好像对这小子起不到什么作用，还是让我金狮来教导他吧！"],["金狮…你最好少管闲事！"]]],[TaskStoryPlayer.DIALOG,[NPC.BAIYING,[MainManager.actorInfo.formatNick + "可是暗黑之神挑中的传承者，目前他还没有通过我对他的考验，你最好别插手！"],["哼哼…白鹰你也太自信了吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.JINSHI,["既然我来了，肯定是要做些什么的！小子你愿意接受我金狮对你的锤炼吗？"],["白鹰…金狮？？怎么回事啊！"]]],[TaskStoryPlayer.MAP_MOVIE,[_taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.JINSHI,[MainManager.actorInfo.formatNick + "既然你可以接受白鹰对你的锤炼，那我也不例外，如果你想早点获得暗黑之神的全部力量，那就必须击败我们！"],["后面还有两大神使等着你呢！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["好了，你们都别争了！告诉你们，不管你们是谁，都会败在我的手下，你们等着吧！"],["好小子，真有骨气！"]]],[TaskStoryPlayer.DIALOG,[NPC.JINSHI,["很好…那我和白鹰就在暗黑圣堂期待你的挑战了，别忘记你可是暗黑之神选中的传承者！"],["恩…我会努力的！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            _inStory = false;
            BufferRecordManager.setMyState(PRE_TASK_BUFF,true);
            SocketConnection.send(1022,86058474);
            if(ToolBarController.panel.panelIsShow)
            {
               KTool.showMapAllPlayerAndMonster();
            }
            ModuleManager.showModule(ClientConfig.getAppModule("darkGodEnvoy/DarkGodEnvoy_GoldenLionMainPanel"));
            initNPC();
         };
         storyPlayer.start();
      }
      
      public static function getInfo(param1:Function) : void
      {
         var cb:Function = param1;
         SocketConnection.addCmdListener(CommandID.DARKGODENVOY_GOLDENLION_GETHARDLEVELINFO,function(param1:SocketEvent):void
         {
            var _loc5_:int = 0;
            var _loc6_:int = 0;
            SocketConnection.removeCmdListener(CommandID.DARKGODENVOY_GOLDENLION_GETHARDLEVELINFO,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            _loc3_.position = 0;
            var _loc4_:Array;
            (_loc4_ = new Array())[0] = _loc3_.readUnsignedInt();
            _loc4_[1] = _loc3_.readUnsignedInt();
            _loc4_[2] = _loc3_.readUnsignedInt();
            _loc4_[3] = _loc3_.readUnsignedInt();
            _loc6_ = int(_loc3_.readUnsignedInt());
            _loc5_ = int(_loc3_.readUnsignedInt());
            setHardLevel(_loc4_,_loc5_,_loc6_,cb);
         });
         SocketConnection.send(CommandID.DARKGODENVOY_GOLDENLION_GETHARDLEVELINFO);
      }
      
      private static function setHardLevel(param1:Array, param2:int, param3:int, param4:Function) : void
      {
         var _loc5_:int = 5;
         var _loc6_:int = 0;
         while(_loc6_ < param1.length)
         {
            if(param1[_loc6_] > 0)
            {
               _loc5_ = _loc6_ + 1;
               break;
            }
            _loc6_++;
         }
         if(param2 != 0)
         {
            _loc5_ = 1;
         }
         else if(zilongInBag && _loc5_ > 1)
         {
            _loc5_--;
         }
         if(param3 > 0)
         {
            _loc5_ = 5;
         }
         param4(_loc5_,param2,param3);
      }
      
      public static function fightGoldenLion(param1:Boolean, param2:int) : void
      {
         SocketConnection.send(1022,86058479);
         var _loc3_:int = getRegion(param1,param2);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         FightManager.fightWithBoss("金狮",_loc3_);
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
      }
      
      private static function getRegion(param1:Boolean, param2:int) : int
      {
         var _loc3_:int = 0;
         if(param1)
         {
            _loc3_ = 9;
         }
         else
         {
            _loc3_ = 4;
         }
         return _loc3_ + param2 - 1;
      }
      
      private static function get zilongInBag() : Boolean
      {
         if(PetManager.getBagPetsById(1718).length > 0 || PetManager.getBagPetsById(1719).length > 0)
         {
            return true;
         }
         return false;
      }
      
      public static function destroy() : void
      {
         if(_taskMc != null)
         {
            _taskMc.removeEventListener(MouseEvent.CLICK,startPreTask);
            DisplayUtil.removeForParent(_taskMc);
            _taskMc = null;
         }
         if(_map)
         {
            _map = null;
         }
      }
   }
}

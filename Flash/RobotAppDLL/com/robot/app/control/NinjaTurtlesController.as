package com.robot.app.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.BufferRecordConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TaskIconManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NinjaTurtlesController
   {
      
      public static const BUFFER_ID:int = 1036;
      
      public static const ENTRY_MAP_ID:int = 77;
      
      public static var icon:SimpleButton;
      
      private static var _isShowIcon:Boolean = true;
      
      public static const TASK_ID:int = 1935;
      
      public static const IS_SHOW_ICON_BUFFER_ID:int = 1055;
      
      public static var map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
       
      
      public function NinjaTurtlesController()
      {
         super();
      }
      
      public static function get isShowIcon() : Boolean
      {
         return _isShowIcon;
      }
      
      public static function set isShowIcon(param1:Boolean) : void
      {
         _isShowIcon = param1;
         BufferRecordManager.setMyState(IS_SHOW_ICON_BUFFER_ID,!_isShowIcon);
      }
      
      public static function setup() : void
      {
         var buffValue:Boolean = Boolean(BufferRecordManager.getMyState(IS_SHOW_ICON_BUFFER_ID));
         _isShowIcon = !buffValue;
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
         });
      }
      
      public static function viewIcon() : void
      {
         if(isShowIcon)
         {
            showIcon();
         }
         else
         {
            hideIcon();
         }
      }
      
      public static function showIcon() : void
      {
         if(icon == null)
         {
            icon = UIManager.getButton("NinjaTurtle_Icon");
            icon.addEventListener(MouseEvent.CLICK,onIconClick);
            icon.scaleX = icon.scaleY = 0.8;
            ToolTipManager.add(icon,"忍者战龟霹雳火拉法耶尔!");
         }
         if(DisplayUtil.hasParent(icon) == false)
         {
            TaskIconManager.addIcon(icon,TaskIconManager.LEFT_SIDE,4);
         }
      }
      
      public static function hideIcon() : void
      {
         if(Boolean(icon) && Boolean(icon.parent))
         {
            ToolTipManager.remove(icon);
            TaskIconManager.delIcon(icon);
         }
      }
      
      private static function onIconClick(param1:MouseEvent) : void
      {
         goMain();
      }
      
      public static function goMain() : void
      {
         SocketConnection.send(1022,86068992);
         ModuleManager.showModule(ClientConfig.getAppModule("NinjaTurtlesTotalPanel"));
      }
      
      public static function goLafayeerTello() : void
      {
         if(MapManager.currentMap.id == ENTRY_MAP_ID)
         {
            goTalk1();
         }
         else
         {
            MapManager.changeMap(ENTRY_MAP_ID);
         }
      }
      
      public static function goDonaTello() : void
      {
         var _loc1_:Boolean = Boolean(BufferRecordManager.getMyState(BUFFER_ID));
         if(!_loc1_)
         {
            if(MapManager.currentMap.id == ENTRY_MAP_ID)
            {
               showTime();
            }
            else
            {
               MapManager.changeMap(ENTRY_MAP_ID);
            }
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("NinjaTurtlesDonaTello"));
         }
      }
      
      public static function goTalk() : void
      {
         NpcDialog.show(NPC.TANGNITAILUO,["我一定要变得更强，才能打败我哥哥麦克。你帮我找到最强的水系能量了吗？"],["我这就去挑战这里的水系精灵 ","让我们看看完成多少任务了吧（查看任务进度）"],[null,goDonaTello]);
      }
      
      public static function goTalk1() : void
      {
         NpcDialog.show(NPC.LAFAYEER,["你好，我是拉法耶尔。只有利用精灵之间的属性克制，才能将我击败。带着你的水系精灵，来挑战我吧。"],["开始挑战拉法耶尔 ","先去获得水系战龟唐尼泰罗"],[function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("LaFaYeErPanel"));
         },function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("NinjaTurtlesDonaTello"));
         }]);
      }
      
      public static function closeScene() : void
      {
         hideAnimationContainerAllChildren();
      }
      
      protected static function hideAnimationContainerAllChildren() : void
      {
         DisplayUtil.removeForParent(_taskMc);
         _taskMc = null;
      }
      
      public static function showAuto() : void
      {
         var _loc1_:Boolean = Boolean(BufferRecordManager.getMyState(BUFFER_ID));
         _loc1_ = false;
         if(!_loc1_)
         {
            showTime();
         }
      }
      
      private static function showTimeComplete() : void
      {
         var _loc3_:uint = 0;
         var _loc1_:Boolean = Boolean(BufferRecordManager.getMyState(BUFFER_ID));
         if(!_loc1_)
         {
            _loc3_ = uint(BufferRecordConfig.getBitIndexByID(BUFFER_ID));
            MainManager.actorInfo.bufferRecordArr[_loc3_] = 1;
            MainManager.selfVisible = true;
            ToolBarController.showOrHideAllUser(true);
            KTool.showMapAllPlayerAndMonster();
            MapManager.currentMap.depthLevel.visible = true;
            closeScene();
            goDonaTello();
            BufferRecordManager.setMyState(BUFFER_ID,true);
            SocketConnection.send(1022,86068994);
         }
         else
         {
            MainManager.selfVisible = true;
            ToolBarController.showOrHideAllUser(true);
            KTool.showMapAllPlayerAndMonster();
            MapManager.currentMap.depthLevel.visible = true;
            closeScene();
            goDonaTello();
         }
         var _loc2_:uint = uint(TasksManager.getTaskStatus(TASK_ID));
         if(_loc2_ == TasksManager.UN_ACCEPT)
         {
            TasksManager.accept(TASK_ID,onAcceptTaskHandler);
         }
         else if(_loc2_ == TasksManager.ALR_ACCEPT)
         {
            TasksManager.complete(TASK_ID,1);
         }
      }
      
      private static function onAcceptTaskHandler(param1:Object = null) : void
      {
         TasksManager.complete(TASK_ID,1);
      }
      
      public static function laiAoClick() : void
      {
         if(!BitBuffSetClass.getState(22419))
         {
            if(MapManager.currentMap.id != 981)
            {
               MapManager.changeMap(981);
            }
            else
            {
               dialogLaiAoLaDuo();
            }
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("LaiAoLaDuoPanel"));
         }
      }
      
      private static function dialogLaiAoLaDuo() : void
      {
         var arr:Array = [];
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mapMovieMc,2,"mc2"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIKELANGQILUO,["我不管你和那个什么元素法师……对莱奥做了什么……不把莱奥还给我，我是……不会放弃的……"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mapMovieMc,3,"mc3"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEILINGSHI,["元素法师取走了莱奥拉多的能量，它已经不记得你们了。"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mapMovieMc,4,"mc4"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TANGNITAILUO,["你这只炸毛的大猫，别以为我们兄弟四个是好欺负的！"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mapMovieMc,5,"mc5"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIKELANGQILUO,["莱奥！雷灵狮，快…快放了它！"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mapMovieMc,6,"mc6"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEILINGSHI,["想救它？能唤醒它的还原能量就在我身上，有本事就来拿吧。"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mapMovieMc,7,"mc7"]);
         arr.push(mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12);
         KTool.hideMapAllPlayerAndMonster();
         getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(false);
         TaskDiaLogManager.single.playStory(arr,function():void
         {
            NpcDialog.show(NPC.MAIKELANGQILUO,[MainManager.actorInfo.nick + "单凭我们三人之力，恐怕很难战胜它。我们需要你的帮助。"],["我这就帮你们救回莱奥拉多。","雷灵狮太厉害了，我还是别惹它了。"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("LaiAoLaDuoPanel"));
               KTool.showMapAllPlayerAndMonster();
               getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(true);
               BitBuffSetClass.setState(22419,1);
               SocketConnection.send(CommandID.COMMAND_42019,22419,1);
               TaskDiaLogManager.single.destroy();
            },function():void
            {
               KTool.showMapAllPlayerAndMonster();
               getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(true);
               BitBuffSetClass.setState(22419,1);
               SocketConnection.send(CommandID.COMMAND_42019,22419,1);
               TaskDiaLogManager.single.destroy();
            }]);
         },"laiaoladuoAni",true,true);
      }
      
      public static function npcMaiKeClick() : void
      {
         if(!BitBuffSetClass.getState(22418))
         {
            dialogMaiKeLangQiLuoMap947();
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("MaiKeLangQiLuoPanel"));
         }
      }
      
      private static function dialogMaiKeLangQiLuoMap947() : void
      {
         var arr:Array = [];
         var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIKELANGQILUO,["听说丽莎布布超进化了，就是在这里吗？"]);
         var mod2:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mapMovieMc,2,"mc2"]);
         var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LAFAYEER,["你们俩别闹了。麦克，莱奥好像遇到大麻烦了。"]);
         var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LAFAYEER,["自从它去挑战一个叫元素法师的家伙，回来之后就变得怪怪的。"]);
         var mod5:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mapMovieMc,3,"mc3"]);
         var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LAFAYEER,["我想，应该是莱奥来了……"]);
         var mod7:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mapMovieMc,4,"mc4"]);
         var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LAIAOLADUO,["伟大的元素法师最痛恨水、火、草系的精灵。今天让我遇到你们，正是我立功的机会。我要把你们全部达成龟壳！"]);
         var mod9:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mapMovieMc,5,"mc5"]);
         var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LAFAYEER,["你们俩别冲动，没发现莱奥有些不对劲吗？它是被元素法师的什么妖术蒙惑了。"]);
         var mod11:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mapMovieMc,6,"mc6"]);
         var mod12:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LAFAYEER,["只有找到元素法师，才能知道它到底对莱奥做了什么。快，我挡住莱奥，你们俩快去找它！"]);
         var mod13:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mapMovieMc,7,"mc7"]);
         var mod14:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIKELANGQILUO,["快去找到元素法师吧。我们俩分头行动。"]);
         var mod15:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TANGNITAILUO,["元素法师？好，我这就去找其他精灵打听打听。听说丽莎布布超进化了，那里的精灵一定很多，我现在就去。"]);
         var mod16:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIKELANGQILUO,["蒙娜丽莎就在元素神殿，你快去吧。我去找赛尔号的机器人们打听打听，它们的消息可是最灵通的。"]);
         var mod17:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mapMovieMc,8,"mc8"]);
         var mod18:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIKELANGQILUO,["哎？你是……麦克朗琪罗！ 你是唐尼泰罗的哥哥吧，我终于遇到你了。 你能成为我的精灵吗？"]);
         var mod19:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mapMovieMc,9,"mc9"]);
         var mod20:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["当然可以，只要能够打败我，就能成为我的朋友"],["哈哈，那就让我来打败你吧！","没兴趣，我要去看丽莎布布超进化"]);
         arr.push(mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13,mod14,mod15,mod16,mod17,mod18,mod19);
         KTool.hideMapAllPlayerAndMonster();
         getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(false);
         TaskDiaLogManager.single.playStory(arr,function():void
         {
            NpcDialog.show(NPC.MAIKELANGQILUO,["当然可以，只要能够打败我，就能成为我的朋友"],["哈哈，那就让我来打败你吧！","没兴趣，我要去看丽莎布布超进化"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("MaiKeLangQiLuoPanel"));
               KTool.showMapAllPlayerAndMonster();
               getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(true);
               BitBuffSetClass.setState(22418,1);
            },function():void
            {
               KTool.showMapAllPlayerAndMonster();
               getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(true);
               BitBuffSetClass.setState(22418,1);
            }]);
         },"maikelangqiluoAni",true,true);
      }
      
      private static function get mapMovieMc() : MovieClip
      {
         return null;
      }
      
      public static function showTime() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("MapAnmiate_DonaTello"),function(param1:MovieClip):void
         {
            _taskMc = param1;
            MapManager.currentMap.controlLevel.addChild(_taskMc);
            MainManager.selfVisible = false;
            ToolBarController.showOrHideAllUser(false);
            KTool.hideMapPlayerAndMonster();
            MapManager.currentMap.depthLevel.visible = false;
            var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,1,"animation1"]);
            var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TANGNITAILUO,["放开我！放开我！别以为我打不过你！"],null);
            var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,2,"animation2"]);
            var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIKELANGQILUO,["草系天生就是克制水系的，知道打不过我，就想请帮手？哼！有本事，你就凭实力打败我！"],null);
            var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,3,"animation3"]);
            var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TANGNITAILUO,["即使我天生被你克制，但只要我变得足够强，就一定能打败你！"],null);
            var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,4,"animation4"]);
            var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TANGNITAILUO,["我一定要在没有大哥二哥帮助的情况下打败麦克！可是，我该怎么办呢？去哪里寻找最强的水系能量？"],null);
            var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,5,"animation5"]);
            var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我就是上天入地无所不能的无敌赛尔——" + MainManager.actorInfo.nick + " 就让我来帮你获得最强的水系能量吧 ~"],null);
            var _loc12_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.TANGNITAILUO,["太好了！那我们快点去吧~"],["好的~"]);
            var _loc13_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,6,"animation6"]);
            TaskDiaLogManager.single.playStory([_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_],showTimeComplete);
         });
      }
   }
}

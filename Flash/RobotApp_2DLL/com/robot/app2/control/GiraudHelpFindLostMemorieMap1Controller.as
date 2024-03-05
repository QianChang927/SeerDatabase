package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class GiraudHelpFindLostMemorieMap1Controller
   {
      
      public static const NODE_1_BUFFER_ID:uint = 1246;
      
      public static const NODE_2_BUFFER_ID:uint = 1247;
      
      public static const NODE_3_BUFFER_ID:uint = 1248;
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
       
      
      public function GiraudHelpFindLostMemorieMap1Controller()
      {
         super();
      }
      
      public static function initForMap10882(param1:BaseMapProcess) : void
      {
         _map = param1;
         startPlay();
      }
      
      public static function startPlay() : void
      {
         _map.topLevel.mouseEnabled = false;
         _map.topLevel.mouseChildren = false;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_giraudHelpFindLostMemories_1"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.conLevel.addChild(taskMc);
            update();
            addEvents();
         });
      }
      
      public static function update() : void
      {
         var i:int = 0;
         KTool.enableMC([_map.btnLevel],false);
         if(!isNode1TaskDone)
         {
            taskMc["btn_0"].buttonMode = true;
         }
         else
         {
            taskMc.gotoAndStop(2);
            taskMc.mc2.gotoAndStop(517);
            i = 0;
            while(i < 6)
            {
               KTool.enableMC([taskMc["monster_" + i]],true);
               taskMc["monster_" + i].buttonMode = true;
               i++;
            }
            KTool.getMultiValue([5738],function(param1:Array):void
            {
               var _loc2_:int = 0;
               var _loc3_:int = 0;
               while(_loc3_ < 6)
               {
                  CommonUI.removeYellowArrow(taskMc["monster_" + _loc3_]);
                  if(BitUtils.getBit(param1[0],_loc3_) > 0)
                  {
                     _loc2_++;
                     CommonUI.removeYellowArrow(taskMc["monster_" + _loc3_]);
                     KTool.enableMC([taskMc["monster_" + _loc3_]],false);
                     taskMc["monster_" + _loc3_].buttonMode = false;
                  }
                  else
                  {
                     CommonUI.addYellowArrow(taskMc["monster_" + _loc3_],100,0,45);
                     KTool.enableMC([taskMc["monster_" + _loc3_]],true);
                     taskMc["monster_" + _loc3_].buttonMode = true;
                  }
                  _loc3_++;
               }
               if(_loc2_ >= 6)
               {
                  if(!isNode2TaskDone)
                  {
                     startPreTask(3);
                  }
                  else
                  {
                     taskMc.gotoAndStop(3);
                     taskMc.mc3.gotoAndStop(393);
                     taskMc.visible = false;
                  }
               }
            });
         }
      }
      
      private static function addEvents() : void
      {
         taskMc.addEventListener(MouseEvent.CLICK,onDialog);
      }
      
      private static function removeEvents() : void
      {
         taskMc.removeEventListener(MouseEvent.CLICK,onDialog);
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      private static function onDialog(param1:MouseEvent) : void
      {
         var _loc2_:String = param1.target.name as String;
         switch(_loc2_)
         {
            case "btn_0":
               chooseDialog0();
               break;
            case "monster_0":
               onMonsterClick(0);
               break;
            case "monster_1":
               onMonsterClick(1);
               break;
            case "monster_2":
               onMonsterClick(2);
               break;
            case "monster_3":
               onMonsterClick(3);
               break;
            case "monster_4":
               onMonsterClick(4);
               break;
            case "monster_5":
               onMonsterClick(5);
         }
      }
      
      private static function chooseDialog0() : void
      {
         if(!isNode1TaskDone)
         {
            NpcDialog.show(NPC.SEER,["喂？你在这里干嘛？"],["……我也不知道。我到底是谁呢？你知道我是谁吗？"],[function():void
            {
               NpcDialog.show(NPC.JILUO,["我就记得，我出来的时候被拍了一下。头现在都好痛。"],["看来他真的什么都记不起了。要不要帮他一下呢？"],[function():void
               {
                  NpcDialog.show(NPC.JILUO,["唔……这地方怪怪的….不好！你闪开，有危险！"],["嗯"],[function():void
                  {
                     startPreTask(2);
                  }]);
               }]);
            }]);
         }
      }
      
      private static function onMonsterClick(param1:int) : void
      {
         var index:int = param1;
         NpcDialog.show(NPC.PIRATE,["哎呦，找事是不？伙计们！削他！"],["干掉他!","有事好商量……"],[function():void
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
            FightManager.fightNoMapBoss("海盗",3747 + index);
         },function():void
         {
         },function():void
         {
         }]);
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         if(!FightManager.isWin)
         {
            NpcDialog.show(NPC.PIRATE,["哈哈哈哈！回到你的精灵胶囊里吧！"],["可恶！"],[function():void
            {
            }]);
         }
      }
      
      private static function startPreTask(param1:int) : void
      {
         var i:int;
         var story:Array = null;
         var storyPlayer:TaskStoryPlayer = null;
         var index:int = param1;
         LevelManager.iconLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         CommonUI.removeYellowArrow(taskMc.btn_0);
         i = 0;
         while(i < 6)
         {
            CommonUI.removeYellowArrow(taskMc["monster_" + i]);
            i++;
         }
         if(index == 3)
         {
            story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,index,"mc" + index]],[TaskStoryPlayer.FUL_MOVIE,["task_giraudHelpFindLostMemories_2",true]]];
         }
         else
         {
            story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,index,"mc" + index]]];
         }
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BufferRecordManager.setMyState(NODE_1_BUFFER_ID + (index - 2),true,function():void
            {
               KTool.showMapPlayerAndMonster();
               LevelManager.iconLevel.visible = true;
               if(index == 2)
               {
                  update();
               }
               else if(index == 3)
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("GiraudHelpFindLostMemoriesMainPanel"));
               }
            });
         };
         storyPlayer.start();
      }
      
      private static function get isNode1TaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(NODE_1_BUFFER_ID);
      }
      
      private static function get isNode2TaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(NODE_2_BUFFER_ID);
      }
      
      private static function get isNode3TaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(NODE_3_BUFFER_ID);
      }
      
      public static function destroy() : void
      {
         removeEvents();
         if(taskMc != null)
         {
            taskMc = null;
         }
         _map = null;
      }
   }
}

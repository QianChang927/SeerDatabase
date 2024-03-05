package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.BitUtils;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ResurrectionStarKingWulingControl
   {
      
      public static const NODE_1_BUFFER_ID:uint = 1331;
      
      public static const NODE_2_BUFFER_ID:uint = 1332;
      
      public static const NODE_3_BUFFER_ID:uint = 1333;
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
       
      
      public function ResurrectionStarKingWulingControl()
      {
         super();
      }
      
      public static function onEqClick() : void
      {
         KTool.getMultiValue([4383],function(param1:Array):void
         {
            var _loc2_:int = 0;
            var _loc3_:int = 0;
            while(_loc3_ < 5)
            {
               if(BitUtils.getBit(param1[0],_loc3_) > 0)
               {
                  _loc2_++;
               }
               _loc3_++;
            }
            if(!isNode1TaskDone)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("ResurrectionStarKingWulingMianPanel"));
            }
            else if(!isNode2TaskDone || _loc2_ < 5)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("ResurrectionStarKingWulingGetItemPanel"));
            }
            else if(!isNode3TaskDone)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("ResurrectionStarKingWulingOpenYishiPanel"));
            }
            else
            {
               ModuleManager.showModule(ClientConfig.getAppModule("ResurrectionStarKingWulingPreheatPanel"));
            }
         });
      }
      
      public static function initForMap11325(param1:BaseMapProcess) : void
      {
         _map = param1;
         startPlay();
      }
      
      public static function initForMap11331(param1:BaseMapProcess) : void
      {
         _map = param1;
         startPlay();
      }
      
      public static function startPlay() : void
      {
         _map.topLevel.mouseEnabled = false;
         _map.topLevel.mouseChildren = false;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_resurrectionStarKingWuling"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            taskMc = mc;
            _map.conLevel.addChild(taskMc);
            if(!isNode1TaskDone)
            {
               if(MapManager.currentMap.id == 11325)
               {
                  startPreTask(1);
               }
               else
               {
                  startPreTask(2);
               }
            }
            else
            {
               KTool.getMultiValue([4383],function(param1:Array):void
               {
                  var _loc2_:int = 0;
                  var _loc3_:int = 0;
                  while(_loc3_ < 5)
                  {
                     if(BitUtils.getBit(param1[0],_loc3_) > 0)
                     {
                        _loc2_++;
                     }
                     _loc3_++;
                  }
                  if(_loc2_ == 5)
                  {
                     if(!isNode2TaskDone)
                     {
                        startPreTask(8);
                     }
                  }
                  else
                  {
                     DisplayUtil.removeForParent(taskMc);
                     ModuleManager.showModule(ClientConfig.getAppModule("ResurrectionStarKingWulingGetItemPanel"));
                  }
               });
            }
         });
      }
      
      private static function startPreTask(param1:int) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var index:int = param1;
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,index,"mc" + index]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            LevelManager.iconLevel.visible = true;
            ToolBarController.panel.visible = true;
            if(index == 1)
            {
               chooseDialog1();
            }
            else if(index == 2)
            {
               chooseDialog2();
            }
            else if(index == 8)
            {
               BufferRecordManager.setMyState(NODE_2_BUFFER_ID,true,function():void
               {
                  DisplayUtil.removeForParent(taskMc);
                  ModuleManager.showModule(ClientConfig.getAppModule("ResurrectionStarKingWulingOpenYishiPanel"));
               });
            }
         };
         storyPlayer.start();
      }
      
      private static function chooseDialog1() : void
      {
         NpcDialog.show(NPC.PUNI,["星灵王曾与我并肩作战，封印库贝萨。如今他被邪冥兽所杀，我也很希望他能够复活。"],["您有办法复活星灵王吗？"],[function():void
         {
            NpcDialog.show(NPC.PUNI,["如今星灵王的身躯已经碎裂，魂魄也不知去向。我能够用圣灵能量重塑星灵王的魂魄，但是我无法创造支撑魂魄的星灵身躯……"],["那就真的没有办法了吗？"],[function():void
            {
               NpcDialog.show(NPC.PUNI,["弗里德身为次元精灵王，应该能够感应到星灵王的身躯碎片在哪里，你们可以去找他。但是……"],["但是什么？"],[function():void
               {
                  NpcDialog.show(NPC.PUNI,["就算用这个办法复活了星灵王，由于是用圣灵能量重塑的魂魄，复活后的星灵王并不完全是之前的星灵王了，他的魂魄会更加趋近圣灵化。"],["所以……"],[function():void
                  {
                     NpcDialog.show(NPC.PUNI,["所以，用这个办法复活的星灵王将会带有圣灵属性，他的属性不再是单纯的次元属性了，而是圣灵次元。"],["即便如此，我也要试试！"],[function():void
                     {
                        MapManager.changeMap(11331);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function chooseDialog2() : void
      {
         NpcDialog.show(NPC.FU_LI_DE,["我为何要帮你？复活了星灵王，让他来与我争次元王的宝座吗？"],["我只是想救我的父亲。"],[function():void
         {
            NpcDialog.show(NPC.FU_LI_DE,["现在宇宙正在遭受大暗黑天的猛烈攻击，大家都在齐心协力对抗大暗黑天。你身为堂堂精灵王，难道只关心自己称王吗？"],["……"],[function():void
            {
               NpcDialog.show(NPC.FU_LI_DE,["好吧，我会告诉你一些线索，不过你记住，次元王的宝座，我不给，你不能抢。"],["我本来就无意争夺次元王。"],[function():void
               {
                  NpcDialog.show(NPC.FU_LI_DE,["星灵王的身躯碎裂成5块星灵石，分别散落在帕诺星系、卡兰星系、罗格星系、裂空星系、螺旋星系这五大星系中。"],["星系虽然广大，我也一定要找到这些星灵石！"],[function():void
                  {
                     NpcDialog.show(NPC.FU_LI_DE,["海洋星、普特罗星、海兹尔星、麦兹星、南瓜星。我就帮你到这了。"],["谢谢你！"],[function():void
                     {
                        BufferRecordManager.setMyState(NODE_1_BUFFER_ID,true,function():void
                        {
                           DisplayUtil.removeForParent(taskMc);
                           ModuleManager.showModule(ClientConfig.getAppModule("ResurrectionStarKingWulingGetItemPanel"));
                        });
                     }]);
                  }]);
               }]);
            }]);
         }]);
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
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      public static function destroy() : void
      {
         DisplayUtil.removeForParent(taskMc);
         if(taskMc != null)
         {
            taskMc = null;
         }
         _map = null;
      }
   }
}

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
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   
   public class GodOfWarUnionBuildControl
   {
      
      private static var _map:MapModel;
      
      private static var _taskMc:MovieClip;
      
      private static var _curIndex:int;
      
      private static var _buffIndex:int = -1;
      
      private static var _openAppName:String;
      
      private static var _fun:Function;
      
      private static const BUFFERARR:Array = [1338,1339,1340,1341,1342];
      
      private static var _mapIdArr:Array = [1020,1006,1005,1008,1010,1020];
       
      
      public function GodOfWarUnionBuildControl()
      {
         super();
      }
      
      public static function playMapMovie(param1:int, param2:int = -1, param3:Function = null) : void
      {
         _curIndex = param1;
         _buffIndex = param2;
         _fun = param3;
         playMc();
      }
      
      private static function playMc() : void
      {
         if(_buffIndex >= 0)
         {
            if(!BufferRecordManager.getMyState(BUFFERARR[_buffIndex]))
            {
               ResourceManager.getResource(ClientConfig.getMapAnimate("map_godOfWarUnionBuild"),function(param1:MovieClip):void
               {
                  taskMc = param1;
                  _map = MapManager.currentMap;
                  _map.controlLevel.addChild(taskMc);
                  startPreTask();
               });
            }
            else if(_fun != null)
            {
               _fun();
            }
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_godOfWarUnionBuild"),function(param1:MovieClip):void
            {
               taskMc = param1;
               _map = MapManager.currentMap;
               _map.controlLevel.addChild(taskMc);
               startPreTask();
            });
         }
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,_curIndex,"mc" + _curIndex]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BufferRecordManager.setMyState(BUFFERARR[_buffIndex],true,function():void
            {
               LevelManager.iconLevel.visible = true;
               ToolBarController.panel.visible = true;
               _map.controlLevel.removeChild(taskMc);
               if(_curIndex == 2)
               {
                  Dialog2();
               }
               else if(_curIndex == 4)
               {
                  Dialog4();
               }
               else if(_curIndex == 6)
               {
                  Dialog6();
               }
               else if(_curIndex == 8)
               {
                  Dialog8();
               }
               else if(_fun != null)
               {
                  _fun();
               }
            });
         };
         storyPlayer.start();
      }
      
      private static function Dialog2() : void
      {
         NpcDialog.show(NPC.AIXINGESI,["伊修兰迪，好久不见啊"],["。。。。。。"],[function():void
         {
            NpcDialog.show(NPC.Yi_XIU_RANDY,["别来无恙啊。你似乎比以前强了一些"],["。。。。。。"],[function():void
            {
               NpcDialog.show(NPC.AIXINGESI,["没强多少，只是比你强一点一点而已。我这次来是发现万恶之井的能量最近动荡的很厉害，我感觉危险在像我们迫近。"],["。。。。。。"],[function():void
               {
                  NpcDialog.show(NPC.Yi_XIU_RANDY,["你不是比我强一点点嘛？还怕什么危险？"],["。。。。。。"],[function():void
                  {
                     NpcDialog.show(NPC.AIXINGESI,["这次的危险不同以往，不是我一个人能应对的，我需要你们的帮助！"],["。。。。。。"],[function():void
                     {
                        NpcDialog.show(NPC.Yi_XIU_RANDY,["我这种弱者怎么能帮上你呢？"],["。。。。。。"],[function():void
                        {
                           NpcDialog.show(NPC.AIXINGESI,["你傲娇个什么劲？小心我打哭你！"],["。。。。。。"],[function():void
                           {
                              NpcDialog.show(NPC.Yi_XIU_RANDY,["打哭我？我打架的时候你还没出来呢！"],["。。。。。。"],[function():void
                              {
                                 NpcDialog.show(NPC.AIXINGESI,["打赢你你就跟我走！"],["。。。。。。"],[function():void
                                 {
                                    NpcDialog.show(NPC.Yi_XIU_RANDY,["好！有种就打哭我!"],["。。。。。。"],[function():void
                                    {
                                       NpcDialog.show(NPC.AIXINGESI,["今天我让你见识见识战斗王者的力量！"],["好啊！拭目以待！"],[function():void
                                       {
                                          if(_fun != null)
                                          {
                                             _fun();
                                          }
                                       }]);
                                    }]);
                                 }]);
                              }]);
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function Dialog4() : void
      {
         NpcDialog.show(NPC.AIXINGESI,["凯兮，我这次来需要你的帮助！"],["。。。。。。"],[function():void
         {
            NpcDialog.show(NPC.MOYANKAIXI,["我察觉到万恶之井的能量波动了，只是此时的我越来越难以控制住我的瞳力！"],["。。。。。。"],[function():void
            {
               NpcDialog.show(NPC.AIXINGESI,["也许我可以帮你!"],["。。。。。。"],[function():void
               {
                  NpcDialog.show(NPC.MOYANKAIXI,["只要控制住瞳力带来的梦魇，我就可以跟你一起行动！"],["。。。。。。"],[function():void
                  {
                     NpcDialog.show(NPC.AIXINGESI,["好！我们快点开始吧!"],["没问题。"],[function():void
                     {
                        if(_fun != null)
                        {
                           _fun();
                        }
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function Dialog6() : void
      {
         NpcDialog.show(NPC.AIXINGESI,["诺伊尔顿，我又回来找你了！"],["。。。。。。"],[function():void
         {
            NpcDialog.show(NPC.NUOYIERDUN,["我知道你的想法，可是你真的想好了吗？"],["。。。。。。"],[function():void
            {
               NpcDialog.show(NPC.AIXINGESI,["也许没有什么时候比现在更清醒的了。"],["。。。。。。"],[function():void
               {
                  NpcDialog.show(NPC.NUOYIERDUN,["好，那我问你几个问题，如果你回答得让我满意，我就跟你一起行动！"],["没问题。"],[function():void
                  {
                     if(_fun != null)
                     {
                        _fun();
                     }
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function Dialog8() : void
      {
         NpcDialog.show(NPC.AIXINGESI,["格莱奥丹！"],["。。。。。。"],[function():void
         {
            NpcDialog.show(NPC.GELAIAODAN,["体内的暗影之力和大地之力在我体内碰撞，我快掌控不住了。"],["。。。。。。"],[function():void
            {
               NpcDialog.show(NPC.AIXINGESI,["让我来帮助你吧！"],["快，速度要快！"],[function():void
               {
                  if(_fun != null)
                  {
                     _fun();
                  }
               }]);
            }]);
         }]);
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
   }
}

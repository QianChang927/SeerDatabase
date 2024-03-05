package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NpcDialogNew_1;
   import flash.display.MovieClip;
   
   public class SacredMissionOfTitanStarController
   {
      
      public static const BUFFER_ID:Array = [1273,1274,1275];
      
      public static const MAPID_ARR:Array = [10957,10958,10959];
      
      private static const _taskId:int = 3107;
      
      private static var _map:MapModel;
      
      private static var _curStep:int;
       
      
      public function SacredMissionOfTitanStarController()
      {
         super();
      }
      
      public static function initForMap(param1:MovieClip = null) : void
      {
         var icon:MovieClip = param1;
         _curStep = getCurStep();
         showLevel();
         if(_curStep == BUFFER_ID.length)
         {
            destroy();
            return;
         }
         if(MapManager.currentMap.id != MAPID_ARR[_curStep])
         {
            MapManager.changeMap(MAPID_ARR[_curStep]);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               playStory(_curStep,initForMap);
            });
         }
         if(MapManager.currentMap.id == MAPID_ARR[_curStep])
         {
            playStory(_curStep,initForMap);
         }
      }
      
      public static function playStory(param1:int, param2:Function = null) : void
      {
         var i:int = param1;
         var cb:Function = param2;
         _map = MapManager.currentMap;
         hideLevel();
         switch(i)
         {
            case 0:
               AnimateManager.playMcAnimate(_map.controlLevel["animationContainer"],1,"mc",function():void
               {
                  NpcDialogNew_1.show(289,["这个星域的最后一站？是什么意思？"],["……"],[function():void
                  {
                     NpcDialogNew_1.show(1512,["宇宙无边无际，太阳系、银河系甚至整个银河星域也只不过是个很小的角落！我们的探索是没有止境的"],["……"],[function():void
                     {
                        NpcDialogNew_1.show(289,["我们要离开银河星域了吗？"],["……"],[function():void
                        {
                           NpcDialogNew_1.show(1512,["是的，我们现在的目的地泰坦星可不是一个普通的行星。它有这神秘的使命"],["……"],[function():void
                           {
                              NpcDialogNew_1.show(289,["什么神秘的使命？"],["……"],[function():void
                              {
                                 NpcDialogNew_1.show(1512,["泰坦星的位置非常的神奇，它位于银河星域和泰坦星域的交界处，可以说，它就是连接两个星域的“门”。"],["……"],[function():void
                                 {
                                    NpcDialogNew_1.show(289,["连接两个星域的门？"],["……"],[function():void
                                    {
                                       NpcDialogNew_1.show(1512,["不过，传说在泰坦星附近可以召唤出星际之门，只要穿过那扇门，就可以在瞬间跨越数万万光年，直接进入另一个星域！"],["……"],[function():void
                                       {
                                          NpcDialogNew_1.show(289,["天哪，太神奇了！"],["……"],[function():void
                                          {
                                             NpcDialogNew_1.show(1512,["如果你还想知道更多关于泰坦星的奥秘，就去问问贾斯汀吧。"],["……"],[function():void
                                             {
                                                AnimateManager.playMcAnimate(_map.controlLevel["animationContainer"],2,"mc",function():void
                                                {
                                                   BufferRecordManager.setMyState(BUFFER_ID[i],true,function():void
                                                   {
                                                      if(cb != null)
                                                      {
                                                         cb();
                                                      }
                                                   });
                                                });
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
               });
               break;
            case 1:
               NpcDialogNew_1.show(289,["贾斯汀站长，罗杰船长给门说了好多关于泰坦星的秘密！您知道关于泰坦星的其它秘闻吗？"],["……"],[function():void
               {
                  NpcDialogNew_1.show(11,["泰坦星么？我的确知道一些，你可知道为什么它会叫做泰坦星？"],["……"],[function():void
                  {
                     NpcDialogNew_1.show(289,["是因为它是连接银河星域和泰坦星域的“门”吗？"],["……"],[function():void
                     {
                        NpcDialogNew_1.show(11,["呵呵，虽没猜中也差不多了。一切要从泰坦星域的创世神泰坦说起！"],["……"],[function():void
                        {
                           NpcDialogNew_1.show(289,["泰坦星域的创世神！？"],["……"],[function():void
                           {
                              NpcDialogNew_1.show(11,["不错，在很久很久以前，出现了一个非常强大的精灵！它就是泰坦，它耗费了许多年的时间制造出了三大神器，并用那三大神器创造出了一个神秘的星域——泰坦星域。"],["……"],[function():void
                              {
                                 NpcDialogNew_1.show(289,["好厉害！"],["……"],[function():void
                                 {
                                    NpcDialogNew_1.show(11,["泰坦星域比我们银河星域古老许多，那里的精灵也比我们星域的精灵更为强大，而泰坦虽然很强大，仍然有一些邪恶的势力超出了它的控制。"],["……"],[function():void
                                    {
                                       NpcDialogNew_1.show(289,["连泰坦都无法控制的邪恶势力，要是侵入我们的世界，整个宇宙不都翻天覆地了！？"],["……"],[function():void
                                       {
                                          NpcDialogNew_1.show(11,["正是如此，所以泰坦利用它的神力制造了一闪门，不经过那扇门，就无法从一个星域到达另一个星域。"],["……"],[function():void
                                          {
                                             NpcDialogNew_1.show(289,["那个门就是泰坦星？"],["……"],[function():void
                                             {
                                                NpcDialogNew_1.show(11,["确切的说，那个门在泰坦星。它叫做星际之门。"],["……"],[function():void
                                                {
                                                   BufferRecordManager.setMyState(BUFFER_ID[i],true,function():void
                                                   {
                                                      if(cb != null)
                                                      {
                                                         cb();
                                                      }
                                                   });
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
               }]);
               break;
            case 2:
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_3107_0"),function():void
               {
                  NpcDialogNew_1.show(289,["要是我们也能为星际之门的开启出一份力就好了呢！"],["……"],[function():void
                  {
                     NpcDialogNew_1.show(1512,["贾斯汀问过谱尼了，还真有一些事情你们是可以帮忙的！"],["……"],[function():void
                     {
                        NpcDialogNew_1.show(289,["船长，快下命令吧！"],["……"],[function():void
                        {
                           NpcDialogNew_1.show(1512,["谱尼在向星际之门注入能量的时候，有一部分能量散逸了出了，变成了圣能结晶。你们去收集这些结晶，就算帮了大忙啦！"],["……"],[function():void
                           {
                              NpcDialogNew_1.show(289,["太好了！总算能帮上忙了！我们这就出发！赛尔号全民总动员！"],["……"],[function():void
                              {
                                 NpcDialogNew_1.show(1512,["执行任务的时候要加倍小心，海盗随时可能出现的！"],["……"],[function():void
                                 {
                                    NpcDialogNew_1.show(289,["知道啦！船长您就放心吧！"],["……"],[function():void
                                    {
                                       BufferRecordManager.setMyState(BUFFER_ID[i],true,function():void
                                       {
                                          SocketConnection.sendWithCallback(2202,function():void
                                          {
                                             if(cb != null)
                                             {
                                                cb();
                                             }
                                          },3107,1);
                                       });
                                    }]);
                                 }]);
                              }]);
                           }]);
                        }]);
                     }]);
                  }]);
               });
         }
      }
      
      public static function hideLevel() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         LevelManager.iconLevel.visible = false;
      }
      
      public static function showLevel() : void
      {
         LevelManager.iconLevel.visible = true;
         KTool.showMapAllPlayerAndMonster();
      }
      
      private static function getCurStep() : int
      {
         var _loc1_:int = 0;
         while(_loc1_ < BUFFER_ID.length)
         {
            if(!BufferRecordManager.getMyState(BUFFER_ID[_loc1_]))
            {
               return _loc1_;
            }
            _loc1_++;
         }
         return BUFFER_ID.length;
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}

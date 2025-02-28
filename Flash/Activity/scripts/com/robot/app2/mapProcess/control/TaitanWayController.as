package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class TaitanWayController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskMc:MovieClip;
       
      
      public function TaitanWayController()
      {
         super();
      }
      
      private static function get isTaskComp() : Boolean
      {
         return BufferRecordManager.getMyState(1003);
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         SocketConnection.send(1022,86067721);
         showMapobject();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_974_0"),function(param1:MovieClip):void
         {
            taskMc = param1;
            MapListenerManager.add(taskMc,onClickMc);
            _map.conLevel.addChild(param1);
            if(BufferRecordManager.getMyState(1003))
            {
               taskMc.gotoAndStop(5);
            }
         });
      }
      
      private static function showMapobject() : void
      {
         setTimeout(function():void
         {
            MapObjectControl.hideOrShowAllObjects(BufferRecordManager.getMyState(1003));
         },100);
      }
      
      public static function ref() : void
      {
         SocketConnection.sendWithCallback(41080,function(param1:SocketEvent):void
         {
            var by:ByteArray;
            var i:uint;
            var totalCnt:uint = 0;
            var e:SocketEvent = param1;
            SocketConnection.removeCmdListener(41080,arguments.callee);
            by = e.data as ByteArray;
            by.position = 0;
            by.readUnsignedByte();
            i = 0;
            while(i < 3)
            {
               totalCnt += by.readUnsignedByte();
               i++;
            }
            if(totalCnt == 30)
            {
               KTool.hideMapAllPlayerAndMonster();
               _map.depthLevel.visible = false;
               AnimateManager.playMcAnimate(taskMc,6,"mc",function():void
               {
                  taskMc.gotoAndStop(5);
                  KTool.showMapAllPlayerAndMonster();
                  _map.depthLevel.visible = true;
                  MapManager.changeMap(971);
               });
            }
         },6011);
      }
      
      private static function onClickMc(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(taskMc.currentFrame == 5)
         {
            SocketConnection.send(1022,86067724);
            FightManager.fightNoMapBoss("海盗",401);
         }
         else
         {
            SocketConnection.send(1022,86067722);
            NpcDialog.show(NPC.PEILIEN,["你就是" + MainManager.actorInfo.formatNick + "？听说你很厉害，你敢接受我的挑战吗？"],["我接受！","我不接受！"],[function():void
            {
               KTool.hideMapAllPlayerAndMonster();
               _map.depthLevel.visible = false;
               AnimateManager.playMcAnimate(taskMc,1,"mc",function():void
               {
                  NpcDialog.show(NPC.ATIEDA,["怎么回事？为什么这些海盗打不到！"],["小心！"],[function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["海盗一定找到了更加先进的技术，我们不能被他们打败！"],["好的！"],[function():void
                     {
                        NpcDialog.show(NPC.ZOG,["哈哈哈！胆小的赛尔！你们统统被包围啦！"],["是佐格？"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMc,2,"mc",function():void
                           {
                              NpcDialog.show(NPC.PEILIEN,["你就是" + MainManager.actorInfo.formatNick + "？你们就是赛尔先锋队？听说你们实力很强啊？"],["知道就赶紧离开！"],[function():void
                              {
                                 NpcDialog.show(NPC.SEER,["泰坦星系能源濒临枯竭！所以就更加不允许海盗集团这样无休止的开采能源！"],["有道理！"],[function():void
                                 {
                                    NpcDialog.show(NPC.PEILIEN,["可是凭什么听你的？用实力来说话吧！"],["我不会怕你的！"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMc,3,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.ATIEDA,["哼！偷袭算什么英雄好汉！有本事我们实实在在的打一场！"],["好啊！"],[function():void
                                          {
                                             NpcDialog.show(NPC.GELEER,["不过要先等我们处理完我们的事情！佐格，麻烦你们把开采的能源交给我！"],["不！"],[function():void
                                             {
                                                NpcDialog.show(NPC.ZOG,["我们辛辛苦苦偷……不是，我们辛辛苦苦开采的能源不能白白的送给你！"],["那就不客气了！"],[function():void
                                                {
                                                   AnimateManager.playMcAnimate(taskMc,4,"mc",function():void
                                                   {
                                                      NpcDialog.show(NPC.SEER,["我一定会拿到泰坦粉末，彻底击败你们！"],["那我们等你！"],[function():void
                                                      {
                                                         BufferRecordManager.setMyState(1003,true,function():void
                                                         {
                                                            taskMc.gotoAndStop(5);
                                                            KTool.showMapAllPlayerAndMonster();
                                                            _map.depthLevel.visible = true;
                                                            SocketConnection.send(1022,86067723);
                                                            showMapobject();
                                                         });
                                                      }]);
                                                   });
                                                }]);
                                             }]);
                                          }]);
                                       });
                                    }]);
                                 }]);
                              }]);
                           });
                        }]);
                     }]);
                  }]);
               });
            }]);
         }
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            DisplayUtil.removeForParent(taskMc);
            _map = null;
         }
      }
   }
}

package com.robot.app.mapProcess.control
{
   import com.robot.app.ogre.OgreController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class TacoLynController
   {
      
      private static var _map:BaseMapProcess;
      
      private static const TASK_ID:uint = 1222;
      
      private static var _taskStatus:int;
       
      
      public function TacoLynController()
      {
         super();
      }
      
      public static function checkItems() : void
      {
         SocketConnection.addCmdListener(CommandID.ITEM_LIST,onCheckItem);
         SocketConnection.send(CommandID.ITEM_LIST,1200281,1200282,2);
      }
      
      private static function onCheckItem(param1:SocketEvent) : void
      {
         var _loc4_:int = 0;
         var _loc5_:SingleItemInfo = null;
         SocketConnection.removeCmdListener(CommandID.ITEM_LIST,onCheckItem);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         _loc4_ = 0;
         while(_loc4_ < _loc3_)
         {
            if((_loc5_ = new SingleItemInfo(_loc2_)).itemID == 1200281)
            {
               SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,394);
            }
            if(_loc5_.itemID == 1200282)
            {
               SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,395);
            }
            _loc4_++;
         }
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _taskStatus = TasksManager.getTaskStatus(TASK_ID);
         if(SystemTimerManager.sysDate.date < 4)
         {
            _map.topLevel["arrow"].visible = false;
            _map.depthLevel["machine"].visible = false;
            _map.conLevel["tacoLyn"].visible = false;
            return;
         }
         if(_taskStatus != TasksManager.COMPLETE)
         {
            MapListenerManager.add(_map.conLevel["tacoLyn"],function():void
            {
               DisplayUtil.removeForParent(_map.conLevel["tacoLyn"]["arrow"]);
               startTask();
            });
            _map.topLevel["arrow"].visible = false;
            _map.depthLevel["machine"].visible = false;
         }
      }
      
      private static function startTask() : void
      {
         var needShowTask903:Boolean = false;
         TasksManager.accept(TASK_ID);
         _map.conLevel["tacoLyn"].visible = true;
         MainManager.selfVisible = false;
         OgreController.isShow = false;
         if(Boolean(_map.depthLevel["task_903"]) && Boolean(_map.depthLevel["task_903"].visible))
         {
            _map.depthLevel["task_903"].visible = false;
            needShowTask903 = true;
         }
         AnimateManager.playMcAnimate(_map.conLevel["tacoLyn"],1,"mc1",function():void
         {
            NpcDialog.show(NPC.SEER,["我是赛尔！塔克林，不认识我了吗？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.JIXIETAKELIN,["赛尔？主人似乎经常提起这个名字！它说你是宇宙中最大的坏蛋，也是我们永远的敌人！看我怎么收拾你！"],["什么？你不是塔克林！难道？"],[function():void
               {
                  AnimateManager.playMcAnimate(_map.conLevel["tacoLyn"],2,"mc2",function():void
                  {
                     NpcDialog.show(NPC.SEER,["刚才实在太危险了，龙王子威武！哈莫雷特，你认识这个和塔克林很像的精灵吗？"],["好像听说过，这个得问问塔克林！"],[function():void
                     {
                        AnimateManager.playMcAnimate(_map.conLevel["tacoLyn"],3,"mc3",function():void
                        {
                           NpcDialog.show(NPC.SEER,["塔克林，看到对面那个精灵吗？有没有一种照镜子的感觉？"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.TACOLIN,["哈哈！你是在说笑吧？让我仔细看看！"],["恩恩！我正摸不着头脑呢？"],[function():void
                              {
                                 NpcDialog.show(NPC.JIXIETAKELIN,["看什么看？！有本事来大战三百回合，打完我还要找机械铠甲呢！"],null,null,false,function():void
                                 {
                                    AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("acitve20120907_3"),function():void
                                    {
                                       NpcDialog.show(NPC.SEER,["机械铠甲到底是什么？为什么你那么在乎？"],null,null,false,function():void
                                       {
                                          NpcDialog.show(NPC.TACOLIN,["我是海盗研制出来的塔克林复制品！机械铠甲是唯一的能量来源，但是海盗。。。为了彻底控制我，没有给我装上所有的机械铠甲！"],["原来机械铠甲那么重要！"],[function():void
                                          {
                                             NpcDialog.show(NPC.TACOLIN,["你们把机械铠甲毁坏了！我的生命力越来越低，看来撑不了多久！"],["什么材料可以修复机械铠甲？"],[function():void
                                             {
                                                NpcDialog.show(NPC.TACOLIN,["机械铠甲的修复材料—机械核心十分稀有！只有spt-boss雷纳多、博卡特、机械系训练师之门擂主LYN、机械系精灵卡丹、道尔、卡斯奇这六只精灵才会掉落！"],["如何修复？"],[function():void
                                                {
                                                   AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("acitve20120907_4"),function():void
                                                   {
                                                      NpcDialog.show(NPC.TACOLIN,["只要用机械核心就可以修复八个机械铠甲，配方各不相同！我体内的剩余能量最多再坚持四周，希望你能在这段时间里完成任务，谢谢！"],["没问题！交给我吧！"],[function():void
                                                      {
                                                         MainManager.selfVisible = true;
                                                         _map.topLevel["arrow"].visible = true;
                                                         _map.conLevel["tacoLyn"].visible = false;
                                                         TasksManager.complete(TASK_ID,0);
                                                         _map.depthLevel["machine"].visible = true;
                                                         if(Boolean(_map.depthLevel["task_903"]) && needShowTask903)
                                                         {
                                                            _map.depthLevel["task_903"].visible = true;
                                                         }
                                                      }]);
                                                   });
                                                }]);
                                             }]);
                                          }]);
                                       });
                                    });
                                 });
                              }]);
                           });
                        });
                     }]);
                  });
               }]);
            });
         });
      }
      
      public static function destroy() : void
      {
         MainManager.selfVisible = true;
         OgreController.isShow = true;
         _map = null;
      }
   }
}

package com.robot.app2.control.ChildrensDay2013
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class ChildrensDay2013WishCollectController
   {
      
      public static var HasRefreshTask:Boolean = false;
       
      
      public function ChildrensDay2013WishCollectController()
      {
         super();
      }
      
      public static function initForNpc() : void
      {
         if(BufferRecordManager.getState(MainManager.actorInfo,651))
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ChildrensDay2013/ChildrensDay2013WishCollectPanel"));
         }
         else
         {
            NpcDialog.show(NPC.SIKAYI,["太好了，又来了一个机器人~ 你好，我叫斯卡伊，你认识大祭司木木吗？"],["当然，我们可是老朋友了~","不好意思，走错地方了。"],[function():void
            {
               SocketConnection.send(1022,86058009);
               MapManager.currentMap.controlLevel["task1499mc"].gotoAndStop(8);
               MapManager.currentMap.controlLevel["task1499mc"].visible = true;
               MainManager.selfVisible = false;
               KTool.hideMapPlayerAndMonster();
               NpcDialog.show(NPC.SEER,["站在那里的不就是木木吗？哈我知道了！你是不好意思跟陌生精灵说话吧。走，我们一起去找木木聊聊天，它可是上知天文下知地理哦！"],null,null,false,function():void
               {
                  AnimateManager.playMcAnimate(MapManager.currentMap.controlLevel["task1499mc"],8,"mc8",function():void
                  {
                     NpcDialog.show(NPC.MUMU,["当我凝视海平面时，远方的一颗星星仿佛在向我传达一个信息——故友生死之谜，即将揭晓；异次元传奇，再度展开。"],["木木又要宣布什么预言了！"],[function():void
                     {
                        AnimateManager.playMcAnimate(MapManager.currentMap.controlLevel["task1499mc"],9,"mc9",function():void
                        {
                           NpcDialog.show(NPC.MUMU,["不过我能透露一个小秘密，这个儿童节，一个神奇的生命会帮助沙滩上的一个幸运儿实现愿望。"],["实现愿望？幸运儿？会是谁呢？"],[function():void
                           {
                              NpcDialog.show(NPC.MUMU,["哈哈，我不会透露再多了。对了，你还没向我介绍这个新朋友呢。"],["哎呀我差点儿忘记了。"],[function():void
                              {
                                 AnimateManager.playMcAnimate(MapManager.currentMap.controlLevel["task1499mc"],10,"mc10",function():void
                                 {
                                    NpcDialog.show(NPC.MUMU,["赛尔号不是要举办起航四周年庆典了吗？大家都很关心周年的筹备工作。想不想跟我一起去热闹的赛尔号转一转？"],null,null,false,function():void
                                    {
                                       NpcDialog.show(NPC.SEER,["对啊对啊，木木你果然是不出门便知天下事啊。你这主意太棒了，我可以给你们做导游~ 新飞行系精灵，一起去吧~"],null,null,false,function():void
                                       {
                                          AnimateManager.playMcAnimate(MapManager.currentMap.controlLevel["task1499mc"],11,"mc11",function():void
                                          {
                                             NpcDialog.show(NPC.MUMU,["每天帮助我收集3个来自飞船的儿童节愿望，就能得到我准备的童心礼包一份哦。" + MainManager.actorInfo.formatNick + "，儿童节快乐哦~"],["嗯，儿童节快乐！"],[function():void
                                             {
                                                SocketConnection.send(1022,86058010);
                                                BufferRecordManager.setState(MainManager.actorInfo,651,true);
                                                MainManager.selfVisible = true;
                                                if(ToolBarController.panel.panelIsShow)
                                                {
                                                   KTool.showMapPlayerAndMonster();
                                                }
                                                ModuleManager.showModule(ClientConfig.getAppModule("ChildrensDay2013/ChildrensDay2013WishCollectPanel"));
                                             }]);
                                          });
                                       });
                                    });
                                 });
                              }]);
                           }]);
                        });
                     }]);
                  });
               });
            }]);
         }
      }
   }
}

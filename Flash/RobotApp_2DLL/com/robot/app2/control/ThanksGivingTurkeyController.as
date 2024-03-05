package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ThanksGivingTurkeyController
   {
      
      private static var _storyMC:MovieClip;
       
      
      public function ThanksGivingTurkeyController()
      {
         super();
      }
      
      private static function get taskState() : Boolean
      {
         return BufferRecordManager.getMyState(914);
      }
      
      public static function initFor77() : void
      {
         SocketConnection.send(1022,86064390);
         if(taskState == false)
         {
            checkMC(pro_0);
         }
         else if(taskState == true)
         {
            openPanel();
         }
      }
      
      private static function pro_0() : void
      {
         SocketConnection.send(1022,86065119);
         KTool.hideMapAllPlayerAndMonster();
         MainManager.selfVisible = false;
         MapObjectControl.hideOrShowAllObjects(false);
         AnimateManager.playMcAnimate(_storyMC,1,"mc1",function():void
         {
            NpcDialog.show(NPC.YILISHA,["太好了，又来了一只同类！你是谁啊？"],["我是大厨奥利弗。"],[function():void
            {
               NpcDialog.show(NPC.AOLIFU,["听说这里正在举行一场感恩节狂欢派对，我想我的厨艺一定可以派上用场！"],["原来是大厨，看来我们有美食了！"],[function():void
               {
                  NpcDialog.show(NPC.YILISHA,["大厨，快给我们露两手吧！"],["哈哈，这么着急啊。"],[function():void
                  {
                     AnimateManager.playMcAnimate(_storyMC,2,"mc2",function():void
                     {
                        NpcDialog.show(NPC.YILISHA,["好神奇的厨艺！师父，请收我为徒吧！"],["额……怎么就叫师父了。"],[function():void
                        {
                           NpcDialog.show(NPC.AOLIFU,["不过美食派对也确实需要帮手，如果你们真感兴趣，我倒是可以顺便教教你们。"],["真的吗？太好了！"],[function():void
                           {
                              NpcDialog.show(NPC.YILISHA,["我们也可以变大厨了吗？以后想吃好东西都可以自己做了，想想都觉得赚到了！"],["可别高兴太早！"],[function():void
                              {
                                 NpcDialog.show(NPC.AOLIFU,["不是谁都可以成为大厨的，先让我看看你们有没有这个天赋！"],["我们可都是厨界天才！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(_storyMC,3,"mc3",function():void
                                    {
                                       NpcDialog.show(NPC.AOLIFU,["感恩节美食派对就要开始了，我先去准备些别的东西，你们要抓紧时间了！"],["我们一定会的！"],[function():void
                                       {
                                          NpcDialog.show(NPC.YILISHA,["师父，等你回来，我们一定会成为比你更厉害的大厨！"],["哈哈，真有信心！"],[function():void
                                          {
                                             NpcDialog.show(NPC.AOLIFU,["如果真是这样，那到时候这些厨具我就送给你们了！"],["一言为定！"],[function():void
                                             {
                                                SocketConnection.send(1022,86065120);
                                                KTool.showMapAllPlayerAndMonster();
                                                MainManager.selfVisible = true;
                                                MapObjectControl.hideOrShowAllObjects(true);
                                                BufferRecordManager.setMyState(914,true);
                                                openPanel();
                                                destroy();
                                             }]);
                                          }]);
                                       }]);
                                    });
                                 }]);
                              }]);
                           }]);
                        }]);
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ThanksGivingTurkeyPanel"));
      }
      
      private static function checkMC(param1:Function) : void
      {
         var func:Function = param1;
         if(Boolean(_storyMC) && Boolean(DisplayUtil.hasParent(_storyMC)))
         {
            func();
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_77_turkey"),function(param1:MovieClip):void
            {
               _storyMC = param1;
               MapManager.currentMap.depthLevel.addChild(_storyMC);
               func();
            });
         }
      }
      
      public static function destroy() : void
      {
         if(_storyMC)
         {
            DisplayUtil.removeForParent(_storyMC);
            _storyMC = null;
         }
      }
   }
}

package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ModoBackController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
      
      private static var _mapAnimate:String = "map_674_0";
       
      
      public function ModoBackController()
      {
         super();
      }
      
      public static function initForMap674(param1:BaseMapProcess) : void
      {
         _map = param1;
         MapListenerManager.add(_map.depthLevel["mcModo"],onModoClick,"龙王摩多");
      }
      
      private static function onModoClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(!BitBuffSetClass.getState(22458))
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
            {
               taskMc = param1;
               _map.btnLevel.addChild(taskMc);
               _map.topLevel.visible = false;
               KTool.hideMapAllPlayerAndMonster();
               _map.depthLevel.visible = false;
               playStory();
            },"movie");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ModoBackMainPanel"));
         }
      }
      
      private static function playStory() : void
      {
         AnimateManager.playMcAnimate(taskMc,1,"mc",function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20140606_4"),function():void
            {
               NpcDialog.show(NPC.MODUO,["哈莫，这些年我一直在你们的背后看着你们的成长。"],["老龙王，我们真的很想念您，我有好多话想跟你说！"],[function():void
               {
                  NpcDialog.show(NPC.MODUO,["孩子，我知道，我也很思念你。但是现在不是叙旧的时候。魔界的爪牙已经伸向龙族，他们十分的强大！"],["我们不怕！"],[function():void
                  {
                     NpcDialog.show(NPC.HAMO_LEITE,["我们龙族是至高无上的，现在又有了0xff0000老龙王0xffffff您的帮助，我们一定是战无不胜，所向披靡的！！"],["孩子，我不能一直保护你们..."],[function():void
                     {
                        NpcDialog.show(NPC.MODUO,["你是龙族的王者，我只是一个年老力衰的老龙了，以后的龙族要靠你们来守护！让我看看你现在的实力到底进步了多少！"],["我不会让您失望的..."],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMc,2,"mc",function():void
                           {
                              NpcDialog.show(NPC.HAMO_LEITE,["龙族力量的精髓？是超进化吗？我现在已经可以得到超进化的力量了！"],["那是远远不够的..."],[function():void
                              {
                                 NpcDialog.show(NPC.MODUO,["孩子，超进化是我们龙族子孙必经的一步，但那并不是我们全部的力量。如果只是超进化我们的力量还不足以完全抵抗魔界！"],["那我们应该做些什么？"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMc,3,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.HAMO_LEITE,["耶里梅斯，这个时候来龙族秘境找我一定有很重要的事情需要我们！这位是老龙王摩多！"],["我需要你们的帮助，跪求！"],[function():void
                                       {
                                          NpcDialog.show(NPC.YELIMEISI,["是魔灵王，他们的力量太过于强大，天蛇星即将受到威胁，我们的力量不足以单方面与他们匹敌！"],["龙族也受到了同样的威胁..."],[function():void
                                          {
                                             NpcDialog.show(NPC.MODUO,["龙族也受到了同样的威胁，但是现在龙神之力还没有修炼完成，仅凭我们目前的力量无法与之匹敌。"],["那我们该怎么办？"],[function():void
                                             {
                                                NpcDialog.show(NPC.MODUO,["我们需要时间，我要和哈莫完成地狱式的修炼！在全面提升以后我们的力量将碾压魔界！"],["真的有这么强么？"],[function():void
                                                {
                                                   AnimateManager.playMcAnimate(taskMc,4,"mc",function():void
                                                   {
                                                      NpcDialog.show(NPC.HAMO_LEITE,["好强大的力量！有你这么强大的盟友，我们可以放心的进行修炼了！"],["我会守护你们的！"],[function():void
                                                      {
                                                         NpcDialog.show(NPC.YELIMEISI_XIE,["（哼哼哼，希望可以成功骗过他们，等到他们修炼完成我就能去报仇了）"],["魔灵王你等着吧！"],[function():void
                                                         {
                                                            KTool.showMapAllPlayerAndMonster();
                                                            _map.depthLevel.visible = true;
                                                            BitBuffSetClass.setState(22458,1);
                                                            DisplayUtil.removeForParent(taskMc);
                                                            _map.topLevel.visible = true;
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
                           });
                        }]);
                     }]);
                  }]);
               }]);
            });
         });
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
         taskMc = null;
         _map = null;
      }
   }
}

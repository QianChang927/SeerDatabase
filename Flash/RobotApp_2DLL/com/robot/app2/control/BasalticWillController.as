package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class BasalticWillController
   {
      
      private static var _map:MapModel;
      
      private static var _cureIndex:int;
      
      private static var _taskMc:MovieClip;
       
      
      private const BUFFERID:uint = 0;
      
      public function BasalticWillController()
      {
         super();
      }
      
      public static function initToMap() : void
      {
         initView();
      }
      
      private static function initView() : void
      {
         _map = MapManager.currentMap;
         _map.controlLevel.addEventListener(MouseEvent.CLICK,onMainClick);
         if(_map.id == 1278)
         {
            KTool.getMultiValue([104259],function(param1:Array):void
            {
               var va:Array = param1;
               if(va[0] > 0)
               {
                  _map.controlLevel["txMc"].visible = true;
                  if(va[0] >= 2 && va[0] < 4)
                  {
                     _map.controlLevel["txMc"].visible = false;
                     if(!BufferRecordManager.getMyState(1389))
                     {
                        NpcDialog.show(NPC.SEER,["这只精灵身上散发着一股熟悉的气息，温和而又深沉。这好像是……玄武！"],["..."],[function():void
                        {
                           NpcDialog.show(NPC.SEER,["难道玄武还活着？我还是去找派特博士研究一下吧！"],["..."],[function():void
                           {
                              MapManager.changeMap(11633);
                           }]);
                        }]);
                     }
                  }
                  else if(va[0] == 1)
                  {
                     FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
                  }
                  else
                  {
                     _map.controlLevel["txMc"].visible = false;
                  }
               }
               else
               {
                  _map.controlLevel["txMc"].visible = false;
                  NpcDialog.show(NPC.GELA,["咯啦……咯啦……"],["..."],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["这里真的出现了新的精灵！这简直是奇观！"],["咯啦……咯啦……"],[function():void
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("BasalticWillSurePanel"),"正在打开....");
                     }]);
                  }]);
               }
            });
         }
         if(_map.id == 11633)
         {
         }
      }
      
      private static function onFightOver(param1:*) : void
      {
         var e:* = param1;
         KTool.getMultiValue([104259],function(param1:Array):void
         {
            var va:Array = param1;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
            if(va[0] == 2)
            {
               NpcDialog.show(NPC.SEER,["这只精灵身上散发着一股熟悉的气息，温和而又深沉。这好像是……玄武！"],["..."],[function():void
               {
                  NpcDialog.show(NPC.SEER,["难道玄武还活着？我还是去找派特博士研究一下吧！"],["..."],[function():void
                  {
                     BufferRecordManager.setMyState(1388,true,function():void
                     {
                        MapManager.changeMap(11633);
                     });
                  }]);
               }]);
            }
         });
      }
      
      private static function onMainClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var index:int = int(KTool.getIndex(event.target));
         switch(event.target.name)
         {
            case "npcBtn":
               StatManager.sendStat2014("0316玄武的意志","点击博士派特","2018运营活动");
               KTool.getMultiValue([104259],function(param1:Array):void
               {
                  if(param1[0] < 3)
                  {
                     if(!BufferRecordManager.getMyState(1388))
                     {
                        Dialog();
                     }
                     else
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("BasalticWillDetectionPanel"),"正在打开....");
                     }
                  }
                  else
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("BasalticWillTaskPanel"),"正在打开....");
                  }
               });
         }
      }
      
      private static function Dialog() : void
      {
         NpcDialog.show(NPC.SEER,["博士，你有听说过最近出现的戈拉吗？"],["..."],[function():void
         {
            NpcDialog.show(NPC.BO_SHI_PAI_TE,["你说的是灵龟之渊那里新出现的精灵吗？我很有兴趣研究一下，但是基地这里事情很多，一直找不到机会，真是太遗憾了。"],["..."],[function():void
            {
               NpcDialog.show(NPC.SEER,["不用遗憾，机会来找你啦！你看这是什么？"],["..."],[function():void
               {
                  NpcDialog.show(NPC.BO_SHI_PAI_TE,["这只精灵我从来没有见过哎……难道它就是戈拉？"],["..."],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["没错，我已经去过灵龟之渊啦！你有没有觉得这只精灵身上有股玄武的气息？"],["..."],[function():void
                     {
                        NpcDialog.show(NPC.BO_SHI_PAI_TE,["恩，这气息的确很像，但我还是需要仔细研究一下。这里正好有机器，快来搭把手！"],["好嘞！"],[function():void
                        {
                           BufferRecordManager.setMyState(1388,true,function():void
                           {
                              ModuleManager.showModule(ClientConfig.getAppModule("BasalticWillDetectionPanel"),"正在打开....");
                           });
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      public static function Dialog1() : void
      {
         NpcDialog.show(NPC.BO_SHI_PAI_TE,["按下开关，机器就开始工作了！让我看看……"],["。。。"],[function():void
         {
            NpcDialog.show(NPC.BO_SHI_PAI_TE,["各项指标似乎非常正常，是一只健康的精灵！唔，身体密度有点大，成分更像是岩石。从外形来看，还兼有一些机械属性。"],["。。。"],[function():void
            {
               NpcDialog.show(NPC.SEER,["这些我都能直接看出来吧，博士！有没有厉害一点的？"],["。。。"],[function():void
               {
                  NpcDialog.show(NPC.BO_SHI_PAI_TE,["厉害点的？那你可要看好了，只要我按下这个键……"],["。。。"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["亮了亮了！咦，机器叫起来了！"],["。。。"],[function():void
                     {
                        NpcDialog.show(NPC.BO_SHI_PAI_TE,["这只精灵的身上有着很强的能量源！好像在肚子那里！我觉得我得把它取出来研究一下……"],["。。。"],[function():void
                        {
                           NpcDialog.show(NPC.SEER,["停停停！取出来？戈拉会不会死掉呀？"],["。。。"],[function():void
                           {
                              NpcDialog.show(NPC.BO_SHI_PAI_TE,["那你放心，我可以负责的告诉你，这是百分百、绝对安全的！"],["。。。"],[function():void
                              {
                                 NpcDialog.show(NPC.SEER,["那就好。（看着博士派特一阵摆弄）"],["看看，这是什么！"],[function():void
                                 {
                                    ModuleManager.showModule(ClientConfig.getAppModule("BasalticWillShowItemPanel"),"正在打开....");
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
      
      public static function Dialog2() : void
      {
         NpcDialog.show(NPC.SEER,["这是什么？能量源吗？"],["。。。"],[function():void
         {
            NpcDialog.show(NPC.BO_SHI_PAI_TE,["让我看看报告。呃。从数据上来讲，它确实算是能量源的一种，但是很巧的是，它跟玄武当年的各项数据基本完全一致。"],["。。。"],[function():void
            {
               NpcDialog.show(NPC.BO_SHI_PAI_TE,["我想，这就是玄武气息的源头了。甚至很有可能，这就是玄武的生命精华！"],["。。。"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["原来如此！难道是玄武在牺牲自己后，用自己的生命哺育了灵龟之渊，从而诞生了戈拉？"],["。。。"],[function():void
                  {
                     NpcDialog.show(NPC.BO_SHI_PAI_TE,["很有可能就是如此。玄武的力量过于强大，在生命燃烧达到顶点后牺牲会导致宇宙无法立即消化如此巨大的能量。这就相当于在宇宙中形成了一个充满营养的胚胎"],["。。。"],[function():void
                     {
                        NpcDialog.show(NPC.BO_SHI_PAI_TE,["灵龟之渊就是这个胚胎，而戈拉们，也算是继承了玄武的遗志！"],["。。。"],[function():void
                        {
                           NpcDialog.show(NPC.SEER,["博士，快把能量源放回去吧。玄武是保护宇宙的伟大精灵，我们也一定要好好保护戈拉们啊！"],["。。。"],[function():void
                           {
                              NpcDialog.show(NPC.BO_SHI_PAI_TE,["保护精灵是我们的义务，这与玄武无关。即使是平凡的精灵，也需要我们细心呵护。至于这个“玄武珠”，你看机器屏幕！"],["。。。"],[function():void
                              {
                                 NpcDialog.show(NPC.BO_SHI_PAI_TE,["从分析上显示，戈拉在诞生后，由于成为了独立个体，开始将玄武的力量从自己体内排出，这才形成了“玄武珠”。将其与戈拉分离，并不会对其造成影响。"],["。。。"],[function():void
                                 {
                                    NpcDialog.show(NPC.BO_SHI_PAI_TE,["而“玄武珠”本身含有巨大的能量，是一种宝贵的资源！它最适合地面系精灵修炼，或是让那些容易暴躁的精灵安静下来"],["。。。"],[function():void
                                    {
                                       NpcDialog.show(NPC.SEER,["这大概就是玄武最后的付出了吧。真是伟大啊！"],["。。。"],[function():void
                                       {
                                          NpcDialog.show(NPC.BO_SHI_PAI_TE,["快将这只戈拉带回去吧，顺便帮我带一些“玄武珠”回来。取出玄武珠非常容易，你只需要这样……这样……"],["知道啦！我去去就回！"],[function():void
                                          {
                                             ModuleManager.showModule(ClientConfig.getAppModule("BasalticWillTaskPanel"),"正在打开....");
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
      }
      
      public static function update() : void
      {
         KTool.getMultiValue([104259],function(param1:Array):void
         {
            if(param1[0] == 1)
            {
               if(_map.controlLevel["txMc"] != null)
               {
                  _map.controlLevel["txMc"].visible = true;
               }
            }
         });
      }
      
      public static function destroy() : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
      }
   }
}

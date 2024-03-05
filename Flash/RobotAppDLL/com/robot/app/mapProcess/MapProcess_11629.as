package com.robot.app.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NpcDialogNew_1;
   import flash.events.MouseEvent;
   
   public class MapProcess_11629 extends BaseMapProcess
   {
       
      
      private var state:int;
      
      public function MapProcess_11629()
      {
         super();
      }
      
      override protected function init() : void
      {
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         LevelManager.toolsLevel.visible = false;
         KTool.getMultiValue([101458],function(param1:Array):void
         {
            state = param1[0];
            conLevel.addEventListener(MouseEvent.CLICK,onConClick);
            playStory();
         });
      }
      
      public function onConClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "fight":
               FightManager.fightNoMapBoss("纳纳",12336);
               break;
            case "close":
               this.destroy();
               KTool.changeMapWithCallBack(1,function():void
               {
                  ModuleManager.showAppModule("PlantsAssistanceMainPanel");
               });
               break;
            case "bag":
               ModuleManager.showAppModule("ADPetBagPanelNew");
               break;
            case "cure":
               PetManager.cureAllFree();
         }
      }
      
      private function playStory() : void
      {
         if(this.state == 1)
         {
            conLevel["mc"].gotoAndStop(3);
            conLevel.mouseEnabled = conLevel.mouseChildren = false;
            NpcDialogNew_1.show(2858,["可恶，还是让它打伤了我的战友！贾斯汀站长，快消灭它！"],null,null,false,function():void
            {
               NpcDialogNew_1.show(2872,["我真的不是故意的，我是被迫还手……我特意注意了轻重，他只是昏迷过去，绝对没有大碍的！"],null,null,false,function():void
               {
                  NpcDialogNew_1.show(11,["刚刚你并没有使出全部的力量，却被我们限制住了。且当作你并没有什么敌意，那么请你说说，你来这里是了什么呢？"],null,null,false,function():void
                  {
                     NpcDialogNew_1.show(2872,["为了结盟。"],null,null,false,function():void
                     {
                        NpcDialogNew_1.show(11,["结盟？什么盟？"],null,null,false,function():void
                        {
                           NpcDialogNew_1.show(2872,["你与我，机器人与植物。唔……还有这些精灵伙伴们。"],null,null,false,function():void
                           {
                              NpcDialogNew_1.show(11,["不是我怀疑你的动机，但是如果你真的代表植物们，你应该也知道前些日子我们双方其实已经交战许久。我凭什么相信你的话语？"],null,null,false,function():void
                              {
                                 NpcDialogNew_1.show(2872,["我带着诚意与善意而来，朋友。看来我需要先介绍一下自己。我叫纳纳，来自这个星球上的植物一族。"],null,null,false,function():void
                                 {
                                    NpcDialogNew_1.show(2872,["我从未在星球上见过你们，不知道你们为何而来。但是看起来你们似乎正与虫族交战，却并没有什么入侵这个星球的意图。"],null,null,false,function():void
                                    {
                                       NpcDialogNew_1.show(2872,["刚发现你们的时候，我曾以为你们是受到虫族控制的敌人，尤其是这位……呃，螳螂朋友。因此，我们向你们发起了进攻。"],null,null,false,function():void
                                       {
                                          NpcDialogNew_1.show(336,["我想我可能知道你说的是谁，我刚从我那位螳螂同族的巢穴里逃命回来。"],null,null,false,function():void
                                          {
                                             NpcDialogNew_1.show(2872,["什么？那你们可真是太幸运了。"],null,null,false,function():void
                                             {
                                                NpcDialogNew_1.show(11,["受虫族控制？为什么你们会这么认为？你看，我们这里不只有英卡洛斯，还有很多植物精灵。"],null,null,false,function():void
                                                {
                                                   NpcDialogNew_1.show(11,["哦对了，忘了介绍，我叫贾斯汀，是这个基地的负责人。这只螳螂叫做英卡洛斯，是与我征战宇宙多年的老朋友。它一直在我身边。"],null,null,false,function():void
                                                   {
                                                      NpcDialogNew_1.show(2872,["幸会，贾斯汀。看来你们的确是外来者，并且对这个星球缺乏了解。那我想，我们结盟的可能性会很大，因为这对你们有利，能帮助你们存活下来！"],null,null,false,function():void
                                                      {
                                                         NpcDialogNew_1.show(11,["存活？听起来我们的处境非常危险。"],null,null,false,function():void
                                                         {
                                                            NpcDialogNew_1.show(2872,["是的。我必须告诉你们这些。这个星球是虫族的目标，虫族想要控制这个星球上所有的生物，而我们植物就是唯一的反抗者！"],null,null,false,function():void
                                                            {
                                                               NpcDialogNew_1.show(2872,["你们偶然出现在这里，也一定已经成为了他们妄图控制的敌人！"],null,null,false,function():void
                                                               {
                                                                  NpcDialogNew_1.show(11,["听你的意思，这个星球上除了植物，其他所有的生物都已经被虫族所控制？这着实有点危言耸听了，他们凭什么做到这一点？"],null,null,false,function():void
                                                                  {
                                                                     NpcDialogNew_1.show(2872,["我知道，不拿出一些事实来证明，你们是绝对不会相信我的。为了表明我的诚意，我先告诉你们一个秘密——一个能帮助你们活下来的秘密。"],["哦？愿闻其详。"],[function():void
                                                                     {
                                                                        conLevel.mouseEnabled = conLevel.mouseChildren = true;
                                                                        KTool.changeMapWithCallBack(1,function():void
                                                                        {
                                                                           ModuleManager.showAppModule("PlantsAssistanceMainPanel");
                                                                        });
                                                                     }]);
                                                                  });
                                                               });
                                                            });
                                                         });
                                                      });
                                                   });
                                                });
                                             });
                                          });
                                       });
                                    });
                                 });
                              });
                           });
                        });
                     });
                  });
               });
            });
         }
         else if(BitBuffSetClass.getState(23583))
         {
            conLevel["mc"].gotoAndStop(2);
         }
         else
         {
            conLevel["mc"].gotoAndStop(1);
            conLevel.mouseEnabled = conLevel.mouseChildren = false;
            AnimateManager.playMcAnimate(conLevel["mc"],1,"mc",function():void
            {
               NpcDialogNew_1.show(2872,["不要动手！我对你们没有敌意！"],null,null,false,function():void
               {
                  NpcDialogNew_1.show(511,["不管你是什么目的，擅自闯入营地，就是对我们的入侵！"],null,null,false,function():void
                  {
                     NpcDialogNew_1.show(2858,["植物的攻击让我们损失惨重，如今却说没有敌意，你觉得我们会相信吗？"],null,null,false,function():void
                     {
                        NpcDialogNew_1.show(11,["这是怎么回事，这只精灵从来没有见过，难道也是敌人？"],null,null,false,function():void
                        {
                           NpcDialogNew_1.show(336,["它看起来倒是没有杀意，不过总归不知根底，还是先将其制服，再问问来意吧！"],["我们上！"],[function():void
                           {
                              conLevel.mouseEnabled = conLevel.mouseChildren = true;
                              BitBuffSetClass.setState(23583,1,function():void
                              {
                                 ModuleManager.showAppModule("PlantsAssistanceMainPanel",1);
                                 playStory();
                              });
                           }]);
                        });
                     });
                  });
               });
            });
         }
      }
      
      override public function destroy() : void
      {
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
         LevelManager.toolsLevel.visible = true;
         if(conLevel != null)
         {
            conLevel.removeEventListener(MouseEvent.CLICK,this.onConClick);
         }
         super.destroy();
      }
   }
}

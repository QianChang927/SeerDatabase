package com.robot.app2.mapProcess
{
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.SpecAlert;
   import com.robot.core.utils.BitUtils;
   import flash.events.MouseEvent;
   import org.taomee.utils.Utils;
   
   public class MapProcess_11741 extends BaseMapProcess
   {
       
      
      protected var _map:MapModel;
      
      protected var _step:int;
      
      protected var _isDone:Boolean;
      
      public function MapProcess_11741()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         ToolBarController.showOrHideAllUser(false);
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         this._map = MapManager.currentMap;
         this._map.controlLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.update();
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var cls:* = undefined;
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         var index:int = int(str.split("_")[1]);
         var index1:int = int(event.target.parent.name.split("_")[1]);
         switch(str)
         {
            case "closeBtn":
               MapManager.changeMapWithCallback(1,function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("HarvestFestivalCelebrationFeastMainPanel"),"正在打开....");
               });
               break;
            case "npcBtn":
               if(this._isDone)
               {
                  NpcDialog.show(1145,["谢谢你的帮助，勇士！你的表现很出色！"],["不客气！"],[function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("HarvestFestivalCelebrationFeastMainPanel"),"正在打开....");
                  }],false,null,true);
                  return;
               }
               if(this._step == 0)
               {
                  NpcDialog.show(1145,["每一年的丰收节，麦田村都会向神鸟“饶”进行祈福，祈祷来年风调雨顺，再次获得巨大的丰收。今天的祈福快开始了，来帮个忙吧！"],["没问题!","让我考虑一下。"],[function():void
                  {
                     KTool.socketSendCallBack(43304,function():void
                     {
                        StatManager.sendStat2014("1019丰收节庆典","开始丰收祈福活动","2018运营活动");
                        update();
                     },[9,1]);
                  }],false,null,true);
               }
               else if(this._step == 2)
               {
               }
               break;
            case "itemBtn":
               KTool.socketSendCallBack(43304,function():void
               {
                  update();
               },[9,index1 + 2]);
               break;
            case "doorBtn_" + index:
               MapManager.changeMap(11742 + index);
               break;
            case "bagBtn":
               PetBagControllerNew.showByBuffer();
               break;
            case "cureBtn":
               if(MainManager.actorInfo.superNono)
               {
                  PetManager.cureAll();
               }
               else
               {
                  cls = Utils.getClass("com.robot.app.mapProcess.control.ColorfulPrivilegeWishController") as Class;
                  if(cls.bonusType == 1)
                  {
                     PetManager.cureAll();
                  }
                  else
                  {
                     SpecAlert.show("恢复精灵体力需要花费50赛尔豆，成为超No用户即可享受永久免费恢复特权！",function():void
                     {
                        PetManager.cureAll();
                     });
                  }
               }
               break;
            case "closeBtn":
               if(MapManager.currentMap.id != 1)
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("HarvestFestivalCelebrationFeastMainPanel"),"正在打开....");
                  });
               }
               else
               {
                  MapManager.changeMapWithCallback(2,function():void
                  {
                     MapManager.changeMapWithCallback(1,function():void
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("HarvestFestivalCelebrationFeastMainPanel"),"正在打开....");
                     });
                  });
               }
         }
      }
      
      protected function update() : void
      {
         this._map.controlLevel["doorBtn_0"].visible = false;
         this._map.controlLevel["doorBtn_1"].visible = false;
         KTool.getMultiValue([104605,104606,16989],function(param1:Array):void
         {
            var i:int;
            var m:int;
            var i1:int = 0;
            var va:Array = param1;
            _step = va[0];
            i = 0;
            while(i < 2)
            {
               _map.controlLevel["mc_" + i].visible = false;
               i++;
            }
            if(_step == 0)
            {
               _map.controlLevel["sighMc"].visible = true;
            }
            else if(_step == 1)
            {
               _map.controlLevel["sighMc"].visible = false;
               if(!BufferRecordManager.getMyState(1459))
               {
                  NpcDialog.show(1145,["那就让我们开始准备工作吧！"],["..."],[function():void
                  {
                     NpcDialog.show(1145,["祈福除了要怀着对神鸟的敬意外，还需要准备两样祭品。一个叫做“烟波草”，一个叫做“翡翠石乳”。"],["..."],[function():void
                     {
                        NpcDialog.show(1145,["我需要你帮我拿来这两件东西。当然了，我会给予你一些指引。"],["..."],[function():void
                        {
                           NpcDialog.show(1145,["“烟波草”来自于烟水迷阵，一般生长在水边。烟波草一年成熟一次，每当我们祭祀祈福时，正好可以采摘。生长在水边的草可不多，你应该能认出来。"],["我这就去！"],[function():void
                           {
                              BufferRecordManager.setMyState(1459,true,function():void
                              {
                                 Alarm2.show("立刻前往烟水迷阵，寻找烟波草吧！",function():void
                                 {
                                 });
                                 _map.controlLevel["doorBtn_0"].visible = true;
                              });
                           }],false,null,true);
                        }],false,null,true);
                     }],false,null,true);
                  }],false,null,true);
               }
               else
               {
                  _map.controlLevel["doorBtn_0"].visible = true;
               }
            }
            else if(_step == 2)
            {
               _map.controlLevel["doorBtn_0"].visible = true;
               _map.controlLevel["sighMc"].visible = false;
            }
            else if(_step == 3)
            {
               _map.controlLevel["sighMc"].visible = false;
               if(!BufferRecordManager.getMyState(1461))
               {
                  NpcDialog.show(1145,["很好！没错，这就是烟波草。你是个很聪明的人，那这第二个任务你也一定可以胜任。"],["..."],[function():void
                  {
                     NpcDialog.show(1145,["想要获得翡翠石乳，你需要前往翡翠山谷，从努加达斯那儿弄一些来。小心一些，它的脾气可是很暴躁的。"],["没有问题！"],[function():void
                     {
                        BufferRecordManager.setMyState(1461,true,function():void
                        {
                           Alarm2.show("立刻前往翡翠山谷，寻找翡翠石乳吧！",function():void
                           {
                           });
                           _map.controlLevel["doorBtn_1"].visible = true;
                        });
                     }],false,null,true);
                  }],false,null,true);
               }
               else
               {
                  _map.controlLevel["doorBtn_1"].visible = true;
               }
            }
            else if(_step == 4)
            {
               _map.controlLevel["sighMc"].visible = false;
               if(va[1] == 0)
               {
                  NpcDialog.show(1145,["翡翠石乳也拿到了吗？你的速度可比我想象中要快多了。来吧，将这些东西放在祭坛上，我们可以开始祈福了！"],["..."],[function():void
                  {
                     showMc();
                  }],false,null,true);
               }
               else
               {
                  showMc();
               }
            }
            else if(_step == 5)
            {
               showMc();
               _map.controlLevel["sighMc"].visible = false;
               NpcDialog.show(1145,["丰收之神在上，尊敬的“饶”啊，我们为您献上珍贵的祭品！"],["..."],[function():void
               {
                  NpcDialog.show(1145,["麦田村祈求您的庇佑！恳求您展现您的神力，让这里风调雨顺，祥和无忧吧！"],["..."],[function():void
                  {
                     KTool.playSceneAnimation("map_HarvestFestivalCelebration",2,function():void
                     {
                        if(BitBuffSetClass.getState(24214) == 0)
                        {
                           NpcDialog.show(1145,["这…不是丰收神鸟……丰收神犬·麦汪汪竟然出现了！"],["..."],[function():void
                           {
                              NpcDialog.show(1145,["传说竟然是真的！「丰收神犬·麦汪汪」！和「丰收神鸟·饶」一样，都是丰收之神御下的圣兽！预示着大丰收！"],["..."],[function():void
                              {
                                 NpcDialog.show(1145,["我们每天都会进行丰收祈福的。谢谢你的帮助，这些东西请你收下，这是麦田村的谢礼。"],["谢谢你！"],[function():void
                                 {
                                    KTool.socketSendCallBack(43304,function():void
                                    {
                                       BitBuffSetClass.setState(24214,1);
                                       update();
                                       ModuleManager.showModule(ClientConfig.getAppModule("HarvestFestivalCelebrationFeastMainPanel"),"正在打开....");
                                    },[9,4]);
                                 }],false,null,true);
                              }],false,null,true);
                           }],false,null,true);
                           return;
                        }
                        NpcDialog.show(1145,["今天的祈福也结束了，谢谢你的帮助！希望麦田村来年也能风调雨顺，再次获得巨大的丰收！这些东西请你收下，这是麦田村的谢礼。"],["..."],[function():void
                        {
                           KTool.socketSendCallBack(43304,function():void
                           {
                              update();
                              ModuleManager.showModule(ClientConfig.getAppModule("HarvestFestivalCelebrationFeastMainPanel"),"正在打开....");
                           },[9,4]);
                        }],false,null,true);
                     },0);
                  }],false,null,true);
               }],false,null,true);
            }
            else if(_step == 6)
            {
               showMc();
               _map.controlLevel["sighMc"].visible = false;
            }
            m = 0;
            while(m < 2)
            {
               if(BitUtils.getBit(va[1],m) > 0)
               {
                  _map.controlLevel["mc_" + m].gotoAndStop(2);
               }
               else
               {
                  _map.controlLevel["mc_" + m].gotoAndStop(1);
               }
               m++;
            }
            _isDone = BitUtils.getBit(va[2],1) > 0 ? true : false;
            if(_isDone)
            {
               _map.controlLevel["sighMc"].visible = false;
               i1 = 0;
               while(i1 < 2)
               {
                  _map.controlLevel["mc_" + i1].gotoAndStop(2);
                  i1++;
               }
               showMc();
            }
         });
      }
      
      private function showMc() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 2)
         {
            this._map.controlLevel["mc_" + _loc1_].visible = true;
            _loc1_++;
         }
      }
      
      override public function destroy() : void
      {
         NpcDialog.hide();
         ToolBarController.showOrHideAllUser(true);
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
         this._map.controlLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}

package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import flash.events.MouseEvent;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   
   public class MapProcess_11715 extends BaseMapProcess
   {
       
      
      private var _step:int;
      
      private var _caijinNum:int;
      
      private var _duoxiNum:int;
      
      private var _itemNumArr:Array;
      
      public var _map:MapModel;
      
      public function MapProcess_11715()
      {
         super();
      }
      
      override protected function init() : void
      {
         LevelManager.iconLevel.visible = false;
         this._map = MapManager.currentMap;
         this._map.controlLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         var _loc1_:int = 0;
         while(_loc1_ < 3)
         {
            this._map.controlLevel["mc_" + _loc1_].visible = false;
            this._map.controlLevel["playMc"]["mc_" + _loc1_].visible = false;
            _loc1_++;
         }
         var _loc2_:int = 0;
         while(_loc2_ < 4)
         {
            this._map.controlLevel["ballMc_" + _loc2_].visible = false;
            _loc2_++;
         }
         this._map.controlLevel["balljiantouMc"].visible = false;
         this._map.controlLevel["difuteMc"].visible = false;
         this._map.controlLevel["gufumanMc"].visible = false;
         this._map.controlLevel["tipsMc"].visible = false;
         this._map.controlLevel["diaoxiangxishouMc"].visible = false;
         this._map.controlLevel["xishouMc"].visible = false;
         this.update();
      }
      
      private function setMouseClick(param1:Boolean) : void
      {
         conLevel.mouseChildren = param1;
         conLevel.mouseEnabled = param1;
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var index1:int = 0;
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         var index:int = int(str.split("_")[1]);
         index1 = int(event.target.parent.name.split("_")[1]);
         switch(str)
         {
            case "mulusaBtn":
               NpcDialog.show(NPC.SEER,["求救信号是从这里传出来的，奇怪，没看到什么精灵呀？"],["..."],[function():void
               {
                  NpcDialog.show(3721,["救救我，呜呜呜……"],["谁？是谁在求救！"],[function():void
                  {
                     NpcDialog.show(3721,["我就在你眼前的雕像里。不，你眼前的这个雕像……就是我。我是墨鲁萨，我正在用精神力与你沟通。"],["..."],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["什么！你……你怎么变成了雕像！哎呀，我该怎么救你出来？"],["..."],[function():void
                        {
                           NpcDialog.show(3721,["原来你也不知道吗……呜呜呜，看来我只能以这副模样，永远地留在这里了。"],["一定是有办法的！"],[function():void
                           {
                              KTool.playSceneAnimation("map_reSeeingThePartnersOfTheDay",1,function():void
                              {
                                 KTool.socketSendCallBack(43761,function(param1:SocketEvent):void
                                 {
                                    update();
                                 },[15,0]);
                              },0);
                           }],false,null,true);
                        }],false,null,false);
                     }],false,null,true);
                  }],false,null,true);
               }],false,null,false);
               break;
            case "difuteBtn":
               NpcDialog.show(NPC.SEER,["尊敬的山神，我把彩晶石带回来了！"],["太好了，莫鲁萨有救了！"],[function():void
               {
                  NpcDialog.show(3590,["把它们放在墨鲁萨脚下，他们会自己吸收石化的气息的。"],["好！"],[function():void
                  {
                     KTool.socketSendCallBack(43761,function(param1:SocketEvent):void
                     {
                        update();
                     },[15,0]);
                  }],false,null,true);
               }],false,null,false);
               break;
            case "kongBtn":
               this._map.controlLevel["playMc"]["mc_" + index1].visible = true;
               AnimateManager.playMcAnimate(this._map.controlLevel["playMc"],1,"mc_" + index1,function():void
               {
                  _map.controlLevel["playMc"]["mc_" + index1].visible = false;
                  KTool.socketSendCallBack(43761,function(param1:SocketEvent):void
                  {
                     update();
                  },[16,index1 + 1]);
               },false,true);
               break;
            case "duoxiBtn":
               if(this._itemNumArr[1] > 0)
               {
                  KTool.socketSendCallBack(43761,function(param1:SocketEvent):void
                  {
                     var e:SocketEvent = param1;
                     if(_duoxiNum < 3)
                     {
                        Alarm2.show("墨鲁萨的解救进度增加了25%！当进度达到100%时，你就能获得墨鲁萨了！");
                     }
                     KTool.socketSendCallBack(43761,function(param1:SocketEvent):void
                     {
                        update();
                     },[15,0]);
                  },[16,index1 + 4]);
               }
               else
               {
                  Alarm2.show("将古夫曼击败，即可获得多西石!");
               }
               break;
            case "gufumanBtn":
               ModuleManager.showAppModule("ReSeeingThePartnersOfTheDayFightPanel",4);
         }
      }
      
      protected function update() : void
      {
         var arr:Array = null;
         arr = [1717881,1717882];
         ItemManager.updateItems(arr,function():void
         {
            _itemNumArr = new Array();
            var _loc1_:int = 0;
            while(_loc1_ < arr.length)
            {
               _itemNumArr[_loc1_] = ItemManager.getNumByID(arr[_loc1_]);
               _loc1_++;
            }
         });
         KTool.getMultiValue([103121,103122,103125],function(param1:Array):void
         {
            var i:int;
            var i2:int;
            var va:Array = param1;
            _step = va[0];
            _caijinNum = 0;
            _duoxiNum = 0;
            i = 0;
            while(i < 3)
            {
               if(BitUtils.getBit(va[1],i) > 0)
               {
                  ++_caijinNum;
                  _map.controlLevel["mc_" + i].gotoAndStop(2);
               }
               else
               {
                  _map.controlLevel["mc_" + i].gotoAndStop(1);
               }
               i++;
            }
            i2 = 0;
            while(i2 < 4)
            {
               if(BitUtils.getBit(va[1],i2 + 3) > 0)
               {
                  ++_duoxiNum;
                  _map.controlLevel["ballMc_" + i2].gotoAndStop(2);
               }
               else
               {
                  _map.controlLevel["ballMc_" + i2].gotoAndStop(1);
               }
               i2++;
            }
            showAll();
            if(BitUtils.getBit(va[2],3) > 0)
            {
               _map.controlLevel["gufumanMc"].visible = false;
               if(_step < 8)
               {
                  NpcDialog.show(NPC.SEER,["这就是多西石吗？"],["没错！"],[function():void
                  {
                     NpcDialog.show(3590,["赶紧将它放在石台上吧！我看，只需要4块多西石，就能将墨鲁萨恢复原状了！"],["好嘞！"],[function():void
                     {
                        KTool.socketSendCallBack(43761,function(param1:SocketEvent):void
                        {
                           update();
                        },[15,0]);
                     }],false,null,true);
                  }],false,null,false);
               }
            }
         });
      }
      
      protected function showAll() : void
      {
         var i:int = 0;
         var k:int = 0;
         var l:int = 0;
         var i1:int = 0;
         var i2:int = 0;
         var i3:int = 0;
         this._map.controlLevel["tipsMc"].visible = false;
         if(this._step == 0)
         {
            this._map.controlLevel["mulusaMc"].gotoAndStop(2);
         }
         if(this._step == 1)
         {
            this._map.controlLevel["difuteMc"].visible = true;
            this._map.controlLevel["mulusaMc"].gotoAndStop(1);
            this._map.controlLevel["difuteMc"].gotoAndStop(1);
            NpcDialog.show(3590,["这种已经被石化的精灵，有一种石头可以解除其效果。我身为炫彩山山神，就曾经见过这种石头。"],["真的吗？快告诉我，上哪去找这种石头！"],[function():void
            {
               NpcDialog.show(3590,["它叫彩晶石，即使在炫彩山也是一种稀有的石头。我……我不曾做过采石这种事情，只知其有，却不知其所在啊。"],["..."],[function():void
               {
                  NpcDialog.show(NPC.SEER,["那就简单了，我这就去炫彩山，找到彩晶石！"],["那就辛苦你了！"],[function():void
                  {
                     KTool.socketSendCallBack(43761,function(param1:SocketEvent):void
                     {
                        update();
                     },[15,0]);
                  }],false,null,false);
               }],false,null,true);
            }],false,null,true);
         }
         if(this._step == 2)
         {
            ModuleManager.showAppModule("ReSeeingThePartnersOfTheDayAlertPanel",1);
         }
         if(this._step == 3)
         {
            this._map.controlLevel["difuteMc"].visible = true;
            this._map.controlLevel["difuteMc"].gotoAndStop(2);
         }
         if(this._step == 4)
         {
            this._map.controlLevel["difuteMc"].gotoAndStop(1);
            this._map.controlLevel["tipsMc"].gotoAndStop(1);
            this._map.controlLevel["tipsMc"].visible = true;
            if(this._caijinNum >= 3)
            {
               NpcDialog.show(3721,["我……我怎么感觉有点晕……"],["..."],[function():void
               {
                  NpcDialog.show(3590,["你有睡意是很正常的，这说明彩晶石已经在吸收你的石化气息了。等你一觉睡醒，你就可以恢复原样了！"],["太好了！"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["那是不是就没事了？跑来跑去好累啊，应该可以歇一会儿了。"],["嗯，接下来等就可以了！"],[function():void
                     {
                        Alarm2.show("彩晶石开始吸收墨鲁萨身上的石化气息了。",function():void
                        {
                           _map.controlLevel["tipsMc"].gotoAndStop(2);
                           _map.controlLevel["tipsMc"].visible = true;
                           _map.controlLevel["diaoxiangxishouMc"].visible = true;
                           _map.controlLevel["xishouMc"].visible = true;
                           AnimateManager.playMcAnimate(_map.controlLevel["xishouMc"],1,"mc",function():void
                           {
                              _map.controlLevel["xishouMc"].visible = false;
                           },false,true);
                           setTimeout(function():void
                           {
                              KTool.socketSendCallBack(43761,function(param1:SocketEvent):void
                              {
                                 _map.controlLevel["diaoxiangxishouMc"].visible = false;
                                 update();
                              },[15,0]);
                           },3000);
                        });
                     }],false,null,false);
                  }],false,null,true);
               }],false,null,true);
            }
         }
         if(this._step == 5)
         {
            KTool.playSceneAnimation("map_reSeeingThePartnersOfTheDay",2,function():void
            {
               KTool.socketSendCallBack(43761,function(param1:SocketEvent):void
               {
                  update();
               },[15,0]);
            },0);
         }
         if(this._step == 6)
         {
            i = 0;
            while(i < 3)
            {
               this._map.controlLevel["mc_" + i].visible = false;
               i++;
            }
            this._map.controlLevel["gufumanMc"].visible = true;
            NpcDialog.show(3590,["那是……古夫曼！"],["..."],[function():void
            {
               NpcDialog.show(NPC.SEER,["啊？什么？……古夫鳗？这里怎么会有鳗鱼？"],["不，你快看那只睡觉的精灵！"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["没什么特别的呀……哎呀！彩晶石呢？彩晶石哪去了！"],["..."],[function():void
                  {
                     NpcDialog.show(3590,["你先别急。我之前只想到了彩晶石，没想到……哈哈，妙啊！"],["..."],[function():void
                     {
                        NpcDialog.show(3590,["古夫曼常年在地底行动，因此体内会逐渐形成一种特殊的物质，保护其免受石化气息的影响。这种物质在受到巨大刺激时会自动脱落。"],["..."],[function():void
                        {
                           NpcDialog.show(3590,["它在脱落后，被称为“多西石”！这可是比彩晶石厉害很多倍的东西，我怎么就没有想到呢？"],["多西石？"],[function():void
                           {
                              NpcDialog.show(3590,["没错！如果靠彩晶石吸收石化气息需要一个月，使用多西石就只需要两天！"],["这么厉害！"],[function():void
                              {
                                 NpcDialog.show(3590,["很显然，这只古夫曼受到彩晶石气息的吸引而出现。现在它睡着了，正是吓他一跳的大好机会！不过你要小心，它的反击也是非常猛烈的！"],["我知道了！"],[function():void
                                 {
                                    KTool.socketSendCallBack(43761,function(param1:SocketEvent):void
                                    {
                                       update();
                                    },[15,0]);
                                 }],false,null,true);
                              }],false,null,true);
                           }],false,null,true);
                        }],false,null,true);
                     }],false,null,true);
                  }],false,null,false);
               }],false,null,false);
            }],false,null,true);
         }
         if(this._step == 7)
         {
            k = 0;
            while(k < 3)
            {
               this._map.controlLevel["mc_" + k].visible = false;
               k++;
            }
            this._map.controlLevel["tipsMc"].gotoAndStop(3);
            this._map.controlLevel["tipsMc"].visible = true;
            this._map.controlLevel["gufumanMc"].gotoAndStop(2);
            this._map.controlLevel["gufumanMc"].visible = true;
         }
         if(this._step == 8)
         {
            l = 0;
            while(l < 3)
            {
               this._map.controlLevel["mc_" + l].visible = false;
               l++;
            }
            this._map.controlLevel["balljiantouMc"].visible = true;
            this._map.controlLevel["tipsMc"].gotoAndStop(4);
            this._map.controlLevel["tipsMc"].visible = true;
         }
         if(this._step == 9 || this._step == 10)
         {
            i1 = 0;
            while(i1 < 3)
            {
               this._map.controlLevel["mc_" + i1].visible = false;
               i1++;
            }
            this._map.controlLevel["balljiantouMc"].visible = false;
            NpcDialog.show(NPC.SEER,["多西石还不够！我们该怎么吸引更多的古夫曼来这里呢……对了，古夫曼喜欢吃彩晶石，我们就给它更多的彩晶石！"],["..."],[function():void
            {
               _map.controlLevel["tipsMc"].gotoAndStop(5);
               _map.controlLevel["tipsMc"].visible = true;
               ModuleManager.showAppModule("ReSeeingThePartnersOfTheDayAlertPanel",5);
            }],false,null,false);
         }
         if(this._step == 4)
         {
            i2 = 0;
            while(i2 < 3)
            {
               this._map.controlLevel["mc_" + i2].visible = true;
               i2++;
            }
         }
         if(this._step >= 8)
         {
            i3 = 0;
            while(i3 < 4)
            {
               this._map.controlLevel["ballMc_" + i3].visible = true;
               i3++;
            }
         }
      }
      
      override public function destroy() : void
      {
         NpcDialog.hide();
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
         this._map.controlLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}

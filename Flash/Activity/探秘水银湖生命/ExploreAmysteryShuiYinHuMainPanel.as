package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   
   public class ExploreAmysteryShuiYinHuMainPanel extends ActivityModel
   {
      private var itemCount1:int;
      
      private var itemCount2:int;
      
      private var itemCount3:int;
      
      private var itemCount4:int;
      
      private var itemCount5:int;
      
      private var itemCount6:int;
      
      private var curItem:int = 1;
      
      private var curItemCount:int = 0;
      
      public function ExploreAmysteryShuiYinHuMainPanel()
      {
         super();
         resUrl = "2024/1213/ExploreAmysteryShuiYinHuMainPanel";
         configUrl = "2024/1213/ExploreAmysteryShuiYinHu";
      }
      
      override public function show() : void
      {
         super.show();
         StatManager.sendStat2014("1213探秘水银湖生命","打开合成面板","2024运营活动");
      }
      
      override protected function updatePanel() : void
      {
         this.itemCount1 = getValue("itemCount1");
         this.itemCount2 = getValue("itemCount2");
         this.itemCount3 = getValue("itemCount3");
         this.itemCount4 = getValue("itemCount4");
         this.itemCount5 = getValue("itemCount5");
         this.itemCount6 = getValue("itemCount6");
         this.updateDisplay();
      }
      
      private function updateDisplay() : void
      {
         _ui["mc"].gotoAndStop(this.curItem);
         _ui["mcc"].gotoAndStop(this.curItem);
         for(var i:int = 1; i <= 3; i++)
         {
            if(i == this.curItem)
            {
               _ui["mc_" + i].gotoAndStop(2);
            }
            else
            {
               _ui["mc_" + i].gotoAndStop(1);
            }
         }
         if(this.curItemCount >= 99)
         {
            CommonUI.setEnabled(_ui["plus"],false);
         }
         else
         {
            CommonUI.setEnabled(_ui["plus"],true);
         }
         if(this.curItem == 1)
         {
            this.loadIcon(_ui["icon_1"],1726484);
            this.loadIcon(_ui["icon_2"],1726485);
            _ui["numTxt1"].text = this.itemCount1 + "/" + this.curItemCount;
            _ui["numTxt2"].text = this.itemCount2 + "/" + this.curItemCount;
            _ui["numTxt"].text = this.curItemCount;
            _ui["curNumTxt"].text = this.itemCount4;
         }
         else if(this.curItem == 2)
         {
            this.loadIcon(_ui["icon_1"],1726484);
            this.loadIcon(_ui["icon_2"],1726486);
            _ui["numTxt1"].text = this.itemCount1 + "/" + this.curItemCount;
            _ui["numTxt2"].text = this.itemCount3 + "/" + this.curItemCount;
            _ui["numTxt"].text = this.curItemCount;
            _ui["curNumTxt"].text = this.itemCount5;
         }
         else
         {
            this.loadIcon(_ui["icon_1"],1726485);
            this.loadIcon(_ui["icon_2"],1726486);
            _ui["numTxt1"].text = this.itemCount2 + "/" + this.curItemCount;
            _ui["numTxt2"].text = this.itemCount3 + "/" + this.curItemCount;
            _ui["numTxt"].text = this.curItemCount;
            _ui["curNumTxt"].text = this.itemCount6;
         }
         if(SystemTimerManager.getIsInActivity("2024122010","*"))
         {
            _ui["goto_2"].visible = false;
         }
         else
         {
            _ui["goto_2"].visible = true;
         }
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btn_name:String = e.target.name;
         var index:int = int(e.target.name.split("_")[1]);
         switch(btn_name)
         {
            case "close":
               hide();
               if(Boolean(MapManager.currentMap) && MapManager.currentMap.id != 1712)
               {
                  MapManager.changeMap(1712);
               }
               break;
            case "itemBtn_" + index:
               this.curItem = index;
               this.curItemCount = 0;
               refresh();
               break;
            case "plus":
               if(this.curItemCount != 99)
               {
                  ++this.curItemCount;
                  refresh();
               }
               break;
            case "pluss":
               if(this.curItemCount > 0)
               {
                  --this.curItemCount;
                  refresh();
               }
               break;
            case "okayBtn":
               if(this.curItem == 1)
               {
                  if(this.curItemCount != 0)
                  {
                     if(this.itemCount1 >= this.curItemCount && this.itemCount2 >= this.curItemCount)
                     {
                        doAction("FlgeReq1",100 * this.curItem + this.curItemCount).then(function():void
                        {
                           refresh();
                        });
                     }
                     else
                     {
                        Alarm2.show("加工所需材料不足！");
                     }
                  }
               }
               else if(this.curItem == 2)
               {
                  if(this.curItemCount != 0)
                  {
                     if(this.itemCount1 >= this.curItemCount && this.itemCount3 >= this.curItemCount)
                     {
                        doAction("FlgeReq1",100 * this.curItem + this.curItemCount).then(function():void
                        {
                           refresh();
                        });
                     }
                     else
                     {
                        Alarm2.show("加工所需材料不足！");
                     }
                  }
               }
               else if(this.curItemCount != 0)
               {
                  if(this.itemCount2 >= this.curItemCount && this.itemCount3 >= this.curItemCount)
                  {
                     doAction("FlgeReq1",100 * this.curItem + this.curItemCount).then(function():void
                     {
                        refresh();
                     });
                  }
                  else
                  {
                     Alarm2.show("加工所需材料不足！");
                  }
               }
               break;
            case "gotoInfo":
               hide();
               ModuleManager.showAppModule("ExploreAmysteryShuiYinHuS1Panel");
               break;
            case "goto_" + index:
               if(index == 1)
               {
                  hide();
                  ModuleManager.showAppModule("ExploreAmysteryShuiYinHuS2Panel");
               }
               else
               {
                  hide();
                  ModuleManager.showAppModule("ExploreAmysteryShuiYinHuS3Panel");
               }
         }
      }
      
      public function loadIcon(mc:MovieClip, itemId:int) : void
      {
         mc.removeChildren();
         if(itemId < 100000)
         {
            ResourceManager.getResource(ClientConfig.getResPath("countermark/icon/" + itemId + ".swf"),function(item:MovieClip):void
            {
               mc.addChild(item);
            },"item");
         }
         else
         {
            ResourceManager.getResource(ItemXMLInfo.getIconURL(itemId),function(item:MovieClip):void
            {
               mc.addChild(item);
            });
         }
      }
   }
}


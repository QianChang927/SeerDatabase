package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.ui.itemTip.ItemInfoTip;
   import com.robot.core.uic.UIScrollBar;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class AoTeMan_DiGuoDeYeXinMainPanel extends ActivityModel
   {
      private var bitbuf_9342:Boolean;
      
      private var forever_125147:int;
      
      private var _scrollBar:UIScrollBar;
      
      private var _arr:Array;
      
      private var _maxLv:int;
      
      private const showMaxCount:int = 6;
      
      private var COUNTARR1:Array;
      
      private var COUNTARR2:Array;
      
      private var COUNTARR3:Array;
      
      private var forever_125148:int;
      
      private var forever_125150:int;
      
      private var forever_125152:int;
      
      private var forever_125151bytes1:int;
      
      private var daily_207072:int;
      
      private var forever_125149bytes1:int;
      
      private var forever_125149bytes2:int;
      
      private var forever_125154bytes1:int;
      
      private var forever_125154bytes2:int;
      
      private var forever_125153:int;
      
      private var isOkay:Boolean = false;
      
      private var COUNTITEM1:Array;
      
      private var COUNTITEMNUM1:Array;
      
      private var COUNTITEM2:Array;
      
      private var COUNTITEMNUM2:Array;
      
      private var forever_okay1:int;
      
      private var forever_okay2:int;
      
      private var forever_temp1:int;
      
      private var forever_temp2:int;
      
      private var forever_okay3:int;
      
      private var viewCount1:int;
      
      private var viewCount2:int;
      
      private var viewCount5:int;
      
      public function AoTeMan_DiGuoDeYeXinMainPanel()
      {
         this._arr = ["在活动中累计开采$/100个矿石","在活动中累计开采$/200个矿石","在活动中累计开采$/500个矿石","在活动中累计开采$/1000个矿石","在活动中累计开采$/3000个矿石","在活动中累计招募了$/10个战士","在活动中累计招募了$/20个战士","在活动中累计招募了$/50个战士","在活动中解锁了战士募集处","在活动中开启了所有矿区","在活动中拥有$/5个工人","在活动中拥有$/10个工人","在活动中拥有$/15个工人"];
         this.COUNTARR1 = [100,200,500,1000,3000];
         this.COUNTARR2 = [10,20,50];
         this.COUNTARR3 = [5,10,15];
         this.COUNTITEM1 = [2500004,2500004,300066,2500004,2500004,1723855,1723855,1723855,2500004,300618,300810,300810,300810];
         this.COUNTITEMNUM1 = [2,2,1,2,2,50000,50000,50000,2,1,2,2,1];
         this.COUNTITEM2 = [300618,1200446,1,300618,1200446,1,1,1,1723855,1200446,1706926,1706926,1706926];
         this.COUNTITEMNUM2 = [2,2,1,2,2,1,1,1,50000,1,2,2,1];
         super();
         resUrl = "2024/1025/AoTeMan_DiGuoDeYeXinMainPanel";
         configUrl = "2024/1025/AoTeMan_DiGuoDeYeXin";
      }
      
      override public function show() : void
      {
         super.show();
         StatManager.sendStat2014("1025银河帝国的野心","打开了银河帝国的野心主面板","2024运营活动");
      }
      
      override protected function updatePanel() : void
      {
         var i:int = 0;
         var k:int = 0;
         this.forever_125147 = getValue("forever_125147");
         this.forever_125148 = getValue("forever_125148");
         this.forever_125149bytes1 = getValue("forever_125149bytes1");
         this.forever_125149bytes2 = getValue("forever_125149bytes2");
         this.bitbuf_9342 = getValue("bitbuf_9342");
         this.daily_207072 = getValue("daily_207072");
         this.forever_125150 = getValue("forever_125150");
         this.forever_125154bytes1 = getValue("forever_125154bytes1");
         this.forever_125154bytes2 = getValue("forever_125154bytes2");
         this.forever_125152 = getValue("forever_125152");
         this.forever_125153 = getValue("forever_125153");
         this.forever_125151bytes1 = getValue("forever_125151bytes1");
         this.forever_okay1 = this.forever_125154bytes1 + this.forever_125148;
         this.forever_okay2 = this.forever_125154bytes2 + this.forever_125149bytes1;
         this.forever_temp1 = 0;
         this.forever_temp2 = 0;
         for(i = 1; i <= 32; i++)
         {
            if(KTool.getBit(this.forever_125150,i) > 0)
            {
               ++this.forever_temp1;
            }
         }
         for(k = 1; k <= 8; k++)
         {
            if(KTool.getBit(this.forever_125151bytes1,k) > 0)
            {
               ++this.forever_temp2;
            }
         }
         this.forever_okay3 = this.forever_temp1 + this.forever_temp2 + this.forever_125149bytes2;
         if(this.forever_125152 == 0 && this.daily_207072 == 3)
         {
            _ui["redPos"].visible = false;
         }
         else
         {
            _ui["redPos"].visible = true;
         }
         this.viewCount1 = 5;
         for(i = 5; i >= 1; i--)
         {
            if(KTool.getBit(this.forever_125147,i) == 0)
            {
               this.viewCount1 = i;
            }
         }
         this.viewCount2 = 3;
         for(k = 3; k >= 1; k--)
         {
            if(KTool.getBit(this.forever_125147,k + 5) == 0)
            {
               this.viewCount2 = k;
            }
         }
         this.viewCount5 = 3;
         for(var t:int = 3; t >= 1; t--)
         {
            if(KTool.getBit(this.forever_125147,t + 10) == 0)
            {
               this.viewCount5 = t;
            }
         }
         this.updateMcView1();
         this.updateMcView2();
         this.updateMcView3();
         this.updateMcView4();
         this.updateMcView5();
      }
      
      private function updateMcView1() : void
      {
         if(this.viewCount1 > 5)
         {
            this.viewCount1 = 5;
         }
         if(KTool.getBit(this.forever_125147,this.viewCount1) > 0)
         {
            _ui["mc_1"].gotoAndStop(3);
         }
         else if(this.forever_okay1 >= this.COUNTARR1[this.viewCount1 - 1])
         {
            _ui["mc_1"].gotoAndStop(2);
         }
         else
         {
            _ui["mc_1"].gotoAndStop(1);
         }
         _ui["mc_1"]["numTxt"].text = this._arr[this.viewCount1 - 1].replace("$",this.forever_okay1);
         _ui["mc_1"]["numTxt"].mouseEnabled = false;
         this.loadIcon(_ui["mc_1"]["icon1"],this.COUNTITEM1[this.viewCount1 - 1]);
         _ui["mc_1"]["countNum1"].text = this.COUNTITEMNUM1[this.viewCount1 - 1];
         _ui["mc_1"]["countNum1"].mouseEnabled = false;
         if(this.COUNTITEM2[this.viewCount1 - 1] == 1)
         {
            _ui["mc_1"]["icon2"].visible = false;
            _ui["mc_1"]["countNum2"].visible = false;
            _ui["mc_1"]["mccc"].visible = false;
         }
         else
         {
            _ui["mc_1"]["mccc"].visible = true;
            _ui["mc_1"]["icon2"].visible = true;
            this.loadIcon1(_ui["mc_1"]["icon2"],this.COUNTITEM2[this.viewCount1 - 1]);
            _ui["mc_1"]["countNum2"].visible = true;
            _ui["mc_1"]["countNum2"].text = this.COUNTITEMNUM2[this.viewCount1 - 1];
            _ui["mc_1"]["countNum2"].mouseEnabled = false;
         }
         _ui["leftViewBtn_1"].visible = this.viewCount1 > 1;
         _ui["rightViewBtn_1"].visible = this.viewCount1 < 5;
      }
      
      private function updateMcView2() : void
      {
         if(this.viewCount2 > 3)
         {
            this.viewCount2 = 3;
         }
         if(KTool.getBit(this.forever_125147,this.viewCount2 + 5) > 0)
         {
            _ui["mc_2"].gotoAndStop(3);
         }
         else if(this.forever_okay2 >= this.COUNTARR2[this.viewCount2 - 1])
         {
            _ui["mc_2"].gotoAndStop(2);
         }
         else
         {
            _ui["mc_2"].gotoAndStop(1);
         }
         _ui["mc_2"]["numTxt"].text = this._arr[this.viewCount2 + 5 - 1].replace("$",this.forever_okay2);
         _ui["mc_2"]["numTxt"].mouseEnabled = false;
         this.loadIcon(_ui["mc_2"]["icon1"],this.COUNTITEM1[this.viewCount2 + 5 - 1]);
         _ui["mc_2"]["countNum1"].text = this.COUNTITEMNUM1[this.viewCount2 + 5 - 1];
         _ui["mc_2"]["countNum1"].mouseEnabled = false;
         if(this.COUNTITEM2[this.viewCount2 + 5 - 1] == 1)
         {
            _ui["mc_2"]["icon2"].visible = false;
            _ui["mc_2"]["countNum2"].visible = false;
            _ui["mc_2"]["mccc"].visible = false;
         }
         else
         {
            _ui["mc_2"]["mccc"].visible = true;
            _ui["mc_2"]["icon2"].visible = true;
            this.loadIcon1(_ui["mc_2"]["icon2"],this.COUNTITEM2[this.viewCount2 + 5 - 1]);
            _ui["mc_2"]["countNum2"].visible = true;
            _ui["mc_2"]["countNum2"].text = this.COUNTITEMNUM2[this.viewCount2 + 5 - 1];
            _ui["mc_2"]["countNum2"].mouseEnabled = false;
         }
         _ui["leftViewBtn_2"].visible = this.viewCount2 > 1;
         _ui["rightViewBtn_2"].visible = this.viewCount2 < 3;
      }
      
      private function updateMcView3() : void
      {
         if(KTool.getBit(this.forever_125147,9) > 0)
         {
            _ui["mc_3"].gotoAndStop(3);
         }
         else if(KTool.getBit(this.forever_125153,5) > 0)
         {
            _ui["mc_3"].gotoAndStop(2);
         }
         else
         {
            _ui["mc_3"].gotoAndStop(1);
         }
         _ui["mc_3"]["numTxt"].text = this._arr[8];
         _ui["mc_3"]["numTxt"].mouseEnabled = false;
         this.loadIcon(_ui["mc_3"]["icon1"],this.COUNTITEM1[8]);
         _ui["mc_3"]["countNum1"].text = this.COUNTITEMNUM1[8];
         _ui["mc_3"]["countNum1"].mouseEnabled = false;
         if(this.COUNTITEM2[8] == 1)
         {
            _ui["mc_3"]["icon2"].visible = false;
            _ui["mc_3"]["countNum2"].visible = false;
            _ui["mc_3"]["mccc"].visible = false;
         }
         else
         {
            _ui["mc_3"]["mccc"].visible = true;
            _ui["mc_3"]["icon2"].visible = true;
            this.loadIcon1(_ui["mc_3"]["icon2"],this.COUNTITEM2[8]);
            _ui["mc_3"]["countNum2"].visible = true;
            _ui["mc_3"]["countNum2"].text = this.COUNTITEMNUM2[8];
            _ui["mc_3"]["countNum2"].mouseEnabled = false;
         }
         _ui["leftViewBtn_3"].visible = false;
         _ui["rightViewBtn_3"].visible = false;
      }
      
      private function updateMcView4() : void
      {
         if(KTool.getBit(this.forever_125147,10) > 0)
         {
            _ui["mc_4"].gotoAndStop(3);
         }
         else if(KTool.getBit(this.forever_125153,1) > 0 && KTool.getBit(this.forever_125153,2) > 0 && KTool.getBit(this.forever_125153,3) > 0 && KTool.getBit(this.forever_125153,4) > 0)
         {
            _ui["mc_4"].gotoAndStop(2);
         }
         else
         {
            _ui["mc_4"].gotoAndStop(1);
         }
         _ui["mc_4"]["numTxt"].text = this._arr[9];
         _ui["mc_4"]["numTxt"].mouseEnabled = false;
         this.loadIcon(_ui["mc_4"]["icon1"],this.COUNTITEM1[9]);
         _ui["mc_4"]["countNum1"].text = this.COUNTITEMNUM1[9];
         _ui["mc_4"]["countNum1"].mouseEnabled = false;
         if(this.COUNTITEM2[9] == 1)
         {
            _ui["mc_4"]["icon2"].visible = false;
            _ui["mc_4"]["countNum2"].visible = false;
            _ui["mc_4"]["mccc"].visible = false;
         }
         else
         {
            _ui["mc_4"]["mccc"].visible = true;
            _ui["mc_4"]["icon2"].visible = true;
            this.loadIcon1(_ui["mc_4"]["icon2"],this.COUNTITEM2[9]);
            _ui["mc_4"]["countNum2"].visible = true;
            _ui["mc_4"]["countNum2"].text = this.COUNTITEMNUM2[9];
            _ui["mc_4"]["countNum2"].mouseEnabled = false;
         }
         _ui["leftViewBtn_4"].visible = false;
         _ui["rightViewBtn_4"].visible = false;
      }
      
      private function updateMcView5() : void
      {
         if(this.viewCount5 > 3)
         {
            this.viewCount5 = 3;
         }
         if(KTool.getBit(this.forever_125147,this.viewCount5 + 10) > 0)
         {
            _ui["mc_5"].gotoAndStop(3);
         }
         else if(this.forever_okay3 >= this.COUNTARR3[this.viewCount5 - 1])
         {
            _ui["mc_5"].gotoAndStop(2);
         }
         else
         {
            _ui["mc_5"].gotoAndStop(1);
         }
         _ui["mc_5"]["numTxt"].text = this._arr[this.viewCount5 + 10 - 1].replace("$",this.forever_okay3);
         _ui["mc_5"]["numTxt"].mouseEnabled = false;
         this.loadIcon(_ui["mc_5"]["icon1"],this.COUNTITEM1[this.viewCount5 + 10 - 1]);
         _ui["mc_5"]["countNum1"].text = this.COUNTITEMNUM1[this.viewCount5 + 10 - 1];
         _ui["mc_5"]["countNum1"].mouseEnabled = false;
         if(this.COUNTITEM2[this.viewCount5 + 10 - 1] == 1)
         {
            _ui["mc_5"]["icon2"].visible = false;
            _ui["mc_5"]["countNum2"].visible = false;
            _ui["mc_5"]["mccc"].visible = false;
         }
         else
         {
            _ui["mc_5"]["mccc"].visible = true;
            _ui["mc_5"]["icon2"].visible = true;
            this.loadIcon1(_ui["mc_5"]["icon2"],this.COUNTITEM2[this.viewCount5 + 10 - 1]);
            _ui["mc_5"]["countNum2"].visible = true;
            _ui["mc_5"]["countNum2"].text = this.COUNTITEMNUM2[this.viewCount5 + 10 - 1];
            _ui["mc_5"]["countNum2"].mouseEnabled = false;
         }
         _ui["leftViewBtn_5"].visible = this.viewCount5 > 1;
         _ui["rightViewBtn_5"].visible = this.viewCount5 < 3;
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btn_name:String = e.target.name;
         var index:int = int(e.target.name.split("_")[1]);
         switch(btn_name)
         {
            case "close":
               hide();
               ModuleManager.showAppModule("UltramanSeriesGoToMapPanel");
               break;
            case "gotoBtn":
               if(this.bitbuf_9342 == false)
               {
                  doAction("FlgeReq1",0).then(function():void
                  {
                     hide();
                     ModuleManager.showAppModule("AoTeMan_DiGuoDeYeXinS1Panel");
                  });
               }
               else
               {
                  hide();
                  ModuleManager.showAppModule("AoTeMan_DiGuoDeYeXinS1Panel");
               }
               break;
            case "getbtn":
               index = int(e.target.parent.name.split("_")[1]);
               if(index == 1)
               {
                  doAction("FlgeReq1",this.viewCount1).then(function():void
                  {
                     refresh();
                  });
               }
               else if(index == 2)
               {
                  doAction("FlgeReq1",this.viewCount2 + 5).then(function():void
                  {
                     refresh();
                  });
               }
               else if(index == 3)
               {
                  doAction("FlgeReq1",9).then(function():void
                  {
                     refresh();
                  });
               }
               else if(index == 4)
               {
                  doAction("FlgeReq1",10).then(function():void
                  {
                     refresh();
                  });
               }
               else
               {
                  doAction("FlgeReq1",this.viewCount5 + 10).then(function():void
                  {
                     refresh();
                  });
               }
               break;
            case "leftViewBtn_1":
               --this.viewCount1;
               this.updateMcView1();
               break;
            case "rightViewBtn_1":
               ++this.viewCount1;
               this.updateMcView1();
               break;
            case "leftViewBtn_2":
               --this.viewCount2;
               this.updateMcView2();
               break;
            case "rightViewBtn_2":
               ++this.viewCount2;
               this.updateMcView2();
               break;
            case "leftViewBtn_5":
               --this.viewCount5;
               this.updateMcView5();
               break;
            case "rightViewBtn_5":
               ++this.viewCount5;
               this.updateMcView5();
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
               mc.removeEventListener(MouseEvent.ROLL_OVER,showinfo);
               mc.removeEventListener(MouseEvent.ROLL_OUT,hideinfo);
               mc.addEventListener(MouseEvent.ROLL_OVER,showinfo);
               mc.addEventListener(MouseEvent.ROLL_OUT,hideinfo);
            },"item");
         }
         else
         {
            ResourceManager.getResource(ItemXMLInfo.getIconURL(itemId),function(item:MovieClip):void
            {
               mc.addChild(item);
               mc.removeEventListener(MouseEvent.ROLL_OVER,showinfo);
               mc.removeEventListener(MouseEvent.ROLL_OUT,hideinfo);
               mc.addEventListener(MouseEvent.ROLL_OVER,showinfo);
               mc.addEventListener(MouseEvent.ROLL_OUT,hideinfo);
            });
         }
      }
      
      public function loadIcon1(mc:MovieClip, itemId:int) : void
      {
         mc.removeChildren();
         if(itemId < 100000)
         {
            ResourceManager.getResource(ClientConfig.getResPath("countermark/icon/" + itemId + ".swf"),function(item:MovieClip):void
            {
               mc.addChild(item);
               mc.removeEventListener(MouseEvent.ROLL_OVER,showinfo1);
               mc.removeEventListener(MouseEvent.ROLL_OUT,hideinfo1);
               mc.addEventListener(MouseEvent.ROLL_OVER,showinfo1);
               mc.addEventListener(MouseEvent.ROLL_OUT,hideinfo1);
            },"item");
         }
         else
         {
            ResourceManager.getResource(ItemXMLInfo.getIconURL(itemId),function(item:MovieClip):void
            {
               mc.addChild(item);
               mc.removeEventListener(MouseEvent.ROLL_OVER,showinfo1);
               mc.removeEventListener(MouseEvent.ROLL_OUT,hideinfo1);
               mc.addEventListener(MouseEvent.ROLL_OVER,showinfo1);
               mc.addEventListener(MouseEvent.ROLL_OUT,hideinfo1);
            });
         }
      }
      
      private function showinfo(e:MouseEvent) : void
      {
         var DateId:int = 0;
         var mc:MovieClip = e.currentTarget as MovieClip;
         var index:int = int(e.target.parent.name.split("_")[1]);
         if(index == 1)
         {
            DateId = int(this.COUNTITEM1[this.viewCount1 - 1]);
         }
         else if(index == 2)
         {
            DateId = int(this.COUNTITEM1[this.viewCount2 + 5 - 1]);
         }
         else if(index == 3)
         {
            DateId = int(this.COUNTITEM1[8]);
         }
         else if(index == 4)
         {
            DateId = int(this.COUNTITEM1[9]);
         }
         else
         {
            DateId = int(this.COUNTITEM1[this.viewCount5 + 10 - 1]);
         }
         var iteminfo:SingleItemInfo = ItemManager.getInfo(DateId);
         if(iteminfo == null)
         {
            iteminfo = ItemManager.getPetItemInfo(DateId);
         }
         if(Boolean(iteminfo))
         {
            ItemInfoTip.show(iteminfo);
         }
         else
         {
            iteminfo = new SingleItemInfo();
            iteminfo.itemID = DateId;
            ItemInfoTip.show(iteminfo);
         }
      }
      
      private function hideinfo(e:MouseEvent = null) : void
      {
         ItemInfoTip.hide();
      }
      
      private function showinfo1(e:MouseEvent) : void
      {
         var DateId:int = 0;
         var mc:MovieClip = e.currentTarget as MovieClip;
         var index:int = int(e.target.parent.name.split("_")[1]);
         if(index == 1)
         {
            DateId = int(this.COUNTITEM2[this.viewCount1 - 1]);
         }
         else if(index == 2)
         {
            DateId = int(this.COUNTITEM2[this.viewCount2 + 5 - 1]);
         }
         else if(index == 3)
         {
            DateId = int(this.COUNTITEM2[8]);
         }
         else if(index == 4)
         {
            DateId = int(this.COUNTITEM2[9]);
         }
         else
         {
            DateId = int(this.COUNTITEM2[this.viewCount5 + 10 - 1]);
         }
         var iteminfo:SingleItemInfo = ItemManager.getInfo(DateId);
         if(iteminfo == null)
         {
            iteminfo = ItemManager.getPetItemInfo(DateId);
         }
         if(Boolean(iteminfo))
         {
            ItemInfoTip.show(iteminfo);
         }
         else
         {
            iteminfo = new SingleItemInfo();
            iteminfo.itemID = DateId;
            ItemInfoTip.show(iteminfo);
         }
      }
      
      private function hideinfo1(e:MouseEvent = null) : void
      {
         ItemInfoTip.hide();
      }
   }
}


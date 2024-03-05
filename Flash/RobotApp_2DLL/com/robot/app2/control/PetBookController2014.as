package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.SkillXMLInfo;
   import com.robot.core.config.xml.TypeXMLInfo;
   import com.robot.core.event.XMLEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.XMLLoader;
   import com.robot.core.zip.PreloadZipXMLController;
   import org.taomee.ds.HashMap;
   
   public class PetBookController2014
   {
      
      private static var _loader1:XMLLoader;
      
      public static var restrictMap:HashMap;
      
      public static var restrictList1:Array = [];
      
      public static var restrictList2:Array = [];
       
      
      public function PetBookController2014()
      {
         super();
      }
      
      public static function setupArray() : void
      {
         var _loc1_:int = 0;
         var _loc2_:int = 0;
         var _loc4_:Array = null;
         var _loc5_:Array = null;
         var _loc6_:int = 0;
         var _loc7_:Number = NaN;
         var _loc8_:Number = NaN;
         var _loc3_:Array = SkillXMLInfo.getAllTypes();
         _loc1_ = 1;
         while(_loc1_ < _loc3_.length + 1)
         {
            if(_loc1_ == 8)
            {
               restrictList1.push([0,0,0,0,0]);
               restrictList2.push([0,0,0,0,0]);
            }
            else
            {
               _loc4_ = [];
               _loc5_ = [];
               _loc2_ = 1;
               while(_loc2_ < _loc3_.length + 1)
               {
                  _loc6_ = int(_loc3_[_loc2_]);
                  if(_loc2_ != 8)
                  {
                     _loc7_ = Number(TypeXMLInfo.getRelations(SkillXMLInfo.petTypeNameEN(_loc3_[_loc1_ - 1]).split("_"),SkillXMLInfo.petTypeNameEN(_loc3_[_loc2_ - 1]).split("_")));
                     _loc8_ = Number(TypeXMLInfo.getRelations(SkillXMLInfo.petTypeNameEN(_loc3_[_loc2_ - 1]).split("_"),SkillXMLInfo.petTypeNameEN(_loc3_[_loc1_ - 1]).split("_")));
                     if(_loc7_ > 1)
                     {
                        _loc4_.push(_loc3_[_loc2_ - 1]);
                     }
                     if(_loc8_ > 1)
                     {
                        _loc5_.push(_loc3_[_loc2_ - 1]);
                     }
                  }
                  _loc2_++;
               }
               restrictList1[_loc3_[_loc1_ - 1] - 1] = _loc4_;
               restrictList2[_loc3_[_loc1_ - 1] - 1] = _loc5_;
            }
            _loc1_++;
         }
      }
      
      public static function getRestraintList(param1:int) : Array
      {
         return restrictList2[param1 - 1];
      }
      
      public static function getRestrainedtList(param1:int) : Array
      {
         return restrictList1[param1 - 1];
      }
      
      public static function loadXML() : void
      {
         PreloadZipXMLController.getXML("typeRestrict.xml",function(param1:*):void
         {
            var _loc3_:int = 0;
            var _loc2_:XML = param1;
            restrictMap = new HashMap();
            _loc3_ = 0;
            while(_loc3_ < _loc2_.type.length())
            {
               restrictMap.add(uint(_loc2_.type[_loc3_].@ID),String(_loc2_.type[_loc3_].@RestrictPet));
               _loc3_++;
            }
         });
      }
      
      private static function onLoadComplete1(param1:XMLEvent) : void
      {
         var _loc3_:int = 0;
         _loader1.removeEventListener(XMLEvent.COMPLETE,onLoadComplete1);
         var _loc2_:XML = param1.data;
         restrictMap = new HashMap();
         _loc3_ = 0;
         while(_loc3_ < _loc2_.type.length())
         {
            restrictMap.add(uint(_loc2_.type[_loc3_].@ID),String(_loc2_.type[_loc3_].@RestrictPet));
            _loc3_++;
         }
      }
      
      public static function openPetBook() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SeerNewBookMainPanel"));
      }
      
      public static function doGoAction(param1:XML) : void
      {
         var value:String = null;
         var tmpstr:Array = null;
         var xml:XML = param1;
         var str:String = xml.@Redirect;
         value = xml.@Go;
         switch(str)
         {
            case "module":
               ModuleManager.showModule(ClientConfig.getModule(value));
               break;
            case "map":
               MapManager.changeMap(parseInt(value));
               break;
            case "map&module":
            case "map|module":
               tmpstr = value.split(";");
               MapManager.changeMapWithCallback(int(tmpstr[0]),function():void
               {
                  ModuleManager.showModule(ClientConfig.getModule(tmpstr[1]));
               });
         }
      }
   }
}
